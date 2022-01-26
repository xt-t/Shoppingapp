package com.example.jsonsecurity.controller;

import com.example.jsonsecurity.model.LoginData;
import com.example.jsonsecurity.service.JWTUtils;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import javax.naming.AuthenticationException;
import java.util.HashMap;

@RestController
@RequestMapping("/auth")
public class LoginController {

    final AuthenticationManager authenticationManager;
    final JWTUtils jwtUtils;

    public LoginController(AuthenticationManager authenticationManager, JWTUtils jwtUtils) {
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
    }

    @GetMapping("login")
    public String login(@RequestBody LoginData loginData){
            //1. darf der Nutzer sich anmelden
        try {
            final UsernamePasswordAuthenticationToken token =
                    new UsernamePasswordAuthenticationToken(loginData.getName(), loginData.getPassword());
            authenticationManager.authenticate(token);
            //2. wenn ja: JWT Token zurückgeben
            return jwtUtils.createToken(new HashMap<>(), loginData.getName());
        } catch (AuthenticationException e) {
        throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
    //   wenn nein: Fehlermeldung
}

}
