package com.example.shoplistbackend.service;

import com.example.shoplistbackend.model.Shoppinglistitem;
import com.example.shoplistbackend.repository.Shoppinglist;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ShoppinglistService {

    private final Shoppinglist listService;

    public ShoppinglistService(Shoppinglist list) {
        listService = list;
    }

    public List<Shoppinglistitem> allProducts() {
        return listService.findAll();
    }

    public String removeProductById(String id) {
        if (listService.existsById(id)) {
            listService.deleteById(id);
            return "Deleted!";
        }
        else {return "Something went wrong";}
    }

    public List<Shoppinglistitem> removeAllProducts() {
        listService.deleteAll();
        return listService.findAll();
    }

    public Shoppinglistitem postProduct(Shoppinglistitem product) {
        return listService.save(product);
    }

    public Optional<Shoppinglistitem> findProductById(String id) {return listService.findById(id);}

    public Optional<Shoppinglistitem> updateProduct(Shoppinglistitem product) {
        listService.save(product);
        return listService.findById(product.getId());
    }
}
