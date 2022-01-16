package com.example.shoplistbackend.repository;

import com.example.shoplistbackend.model.Shoppinglistitem;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface Shoppinglist extends MongoRepository<Shoppinglistitem, String> {

}
