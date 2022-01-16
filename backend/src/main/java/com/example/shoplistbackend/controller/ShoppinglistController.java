package com.example.shoplistbackend.controller;

import com.example.shoplistbackend.model.Shoppinglistitem;
import com.example.shoplistbackend.service.ShoppinglistService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @PostMapping
    private ResponseEntity<Shoppinglistitem> postShoppingitem (@RequestBody Shoppinglistitem product) {
        return ok(shopservice.postProduct(product));
    }

    @DeleteMapping()
    public ResponseEntity<List<Shoppinglistitem>>  removeShoppinglist () {
        List<Shoppinglistitem> noItems = shopservice.removeAllProducts();
        return ok(noItems);
    }

    @DeleteMapping(value="/{id}")
    public ResponseEntity<Shoppinglistitem> removeShoppingitem (@PathVariable String id) {
        Optional<Shoppinglistitem> opt = shopservice.removeProductById(id);
        return ResponseEntity.of(opt);
    }

    @GetMapping(value="{id}")
        public ResponseEntity<Shoppinglistitem> findShoppingitemById (@PathVariable String id) {
        Optional<Shoppinglistitem> opt = shopservice.findProductById(id);
        return ResponseEntity.of(opt);
    }

    @PutMapping(value="/{id}/update")
    public ResponseEntity<Shoppinglistitem> updateProduct (@RequestBody Shoppinglistitem product) {
        Optional<Shoppinglistitem> opt = shopservice.updateProduct(product);
        return ResponseEntity.of(opt);
    }

}
