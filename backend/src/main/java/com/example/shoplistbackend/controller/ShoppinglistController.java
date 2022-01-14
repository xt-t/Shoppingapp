package com.example.shoplistbackend.controller;

import com.example.shoplistbackend.model.Shoppinglistitem;
import com.example.shoplistbackend.service.ShoppinglistService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("${url}")
public class ShoppinglistController {

    private final ShoppinglistService shopservice;

    public ShoppinglistController(ShoppinglistService shopservice) {
        this.shopservice = shopservice;
    }

    @GetMapping
    private ResponseEntity<List<Shoppinglistitem>> getAllItems() {
        List<Shoppinglistitem> allItems = shopservice.allProducts();
        return ok(allItems);
    }


}
