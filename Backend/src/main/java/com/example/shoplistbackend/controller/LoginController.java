package com.example.shoplistbackend.controller;

import com.example.shoplistbackend.model.LoginData;
import com.example.shoplistbackend.service.JWTUtils;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;

@RestController
@RequestMapping("/auth/login")
public class LoginController {

    final AuthenticationManager authenticationManager;
    final JWTUtils jwtUtils;

    public LoginController(AuthenticationManager authenticationManager, JWTUtils jwtUtils) {
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
    }

    @PostMapping()
    public String login(@RequestBody LoginData loginData){
        try{
            //Hat Berechtigung sich anzumelden?
            final UsernamePasswordAuthenticationToken token =
                    new UsernamePasswordAuthenticationToken(loginData.getName(), loginData.getPassword());
            authenticationManager.authenticate(token);
            //Wenn ja = JWT Token wiedergeben!
            return jwtUtils.createToken(new HashMap<>(), loginData.getName());
        }catch (AuthenticationException e){
            //Wenn nein = Fehlermeldung!
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "invalid credentials!");
        }
    }
}
