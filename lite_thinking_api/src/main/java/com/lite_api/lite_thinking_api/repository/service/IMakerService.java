package com.lite_api.lite_thinking_api.repository.service;

import com.lite_api.lite_thinking_api.entities.Maker;

import java.util.List;
import java.util.Optional;

public interface IMakerService {

    List<Maker> findAll();

    Optional<Maker> findById(Long id);

    void save(Maker maker);

    void deleteById(Long id);


}
