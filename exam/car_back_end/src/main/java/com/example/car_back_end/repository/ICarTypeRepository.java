package com.example.car_back_end.repository;

import com.example.car_back_end.model.CarType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ICarTypeRepository extends JpaRepository<CarType, Integer> {
    @Query(nativeQuery = true, value = "select ct.* from car_type as ct")
    List<CarType> findAll();
}
