package com.example.shoplistbackend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

@Document("Shoppingitem")
public class Shoppinglistitem {

    @Id
    private String id;

    private String productname;
    private int quantity;
    private boolean isSelected;

}
