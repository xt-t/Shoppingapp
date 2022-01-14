package com.example.shoplistbackend.service;

import com.example.shoplistbackend.model.Shoppinglistitem;
import com.example.shoplistbackend.repository.Shoppinglist;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ShoppinglistService {

    private final Shoppinglist listService;
    private final IdService idService;

    public ShoppinglistService(Shoppinglist list, IdService id) {
        listService = list;
        idService = id;
    }

    public List<Shoppinglistitem> allProducts() {
        return listService.findAll();
    }

//    public Shoppinglistitem addProduct(Shoppinglistitem item) {
//        item.setId(idService.generateId());
//        return listService.addProduct(item);
//    }
//
//    public Optional<Shoppinglistitem> findShoppinglistitemById(String id) {return listService.findById(id);}
//
//    public Optional<Shoppinglistitem> updateProduct(Shoppinglistitem item) {
//        if (findShoppinglistitemById(item.getId()).isEmpty()) {
//            return Optional.empty();
//        }
//        return Optional.of(listService.changeProduct(item.getId(), item));
//    }
//
//    public Optional<Shoppinglistitem> removeToDoById(String id) {return listService.deleteShoppinglistitemById(id);}

}
