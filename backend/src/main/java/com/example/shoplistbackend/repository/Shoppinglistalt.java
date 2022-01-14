package com.example.shoplistbackend.repository;

import com.example.shoplistbackend.model.Shoppinglistitem;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Repository
public class Shoppinglistalt {

    private final Map<String, Shoppinglistitem> productRepo;

    public Shoppinglistalt() {
        productRepo = new HashMap<>();
        productRepo.put("1", Shoppinglistitem.builder().id("1").productname("Käse").quantity(5).isSelected(false).build());
    }

    public List<Shoppinglistitem> getAllProducts() {
        return productRepo.values().stream().toList();
    }

    public Shoppinglistitem addProduct(Shoppinglistitem add) {
        productRepo.put(add.getId(), add);
        return add;
    }

    public Optional<Shoppinglistitem> findById(String id) {
        return Optional.of(productRepo.get(id));
    }

    public Shoppinglistitem changeProduct(String id, Shoppinglistitem item) {
        productRepo.replace(id, item);
        return item;
    }

    public Optional<Shoppinglistitem> deleteShoppinglistitemById(String id) {
        return Optional.of(productRepo.remove(id));
    }

}
