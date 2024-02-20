package com.lite_api.lite_thinking_api.controllers.dto;

import com.lite_api.lite_thinking_api.entities.Product;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MakerDTO {

    private Long id;

    private String name;

    private List<Product> productList = new ArrayList<>();

}
