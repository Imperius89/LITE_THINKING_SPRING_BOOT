package com.lite_api.lite_thinking_api.repository;

import com.lite_api.lite_thinking_api.entities.Maker;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MakerRepository extends CrudRepository<Maker, Long> {

}
