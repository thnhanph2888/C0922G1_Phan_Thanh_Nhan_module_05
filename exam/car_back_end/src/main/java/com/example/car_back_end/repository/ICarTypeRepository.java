package com.example.car_back_end.repository;

import com.example.car_back_end.model.CarType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ICarTypeRepository extends JpaRepository<CarType, Integer> {
    @Query(nativeQuery = true, value = "select ct.* from car_type as ct")
    Page<CarType> findAllPage(Pageable pageable);
}
