package com.example.shoplistbackend;

import com.example.shoplistbackend.model.Shoppinglistitem;
import com.example.shoplistbackend.repository.Shoppinglist;
import lombok.Value;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories(basePackageClasses = Shoppinglist.class)
public class ShoplistbackendApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(ShoplistbackendApplication.class, args);
    }

    @Autowired
    Shoppinglist repository;

    @Override
    public void run(String... args) throws Exception {
        final Shoppinglistitem product = Shoppinglistitem.builder().name("Brot").build();
        repository.save(product);

        repository.findAll().stream().forEach(System.out::println);
    }
}

