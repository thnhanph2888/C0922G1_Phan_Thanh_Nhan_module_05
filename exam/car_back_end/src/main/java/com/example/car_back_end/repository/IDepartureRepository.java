package com.example.car_back_end.repository;
import com.example.car_back_end.model.Departure;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IDepartureRepository extends JpaRepository<Departure, Integer> {
    @Query(nativeQuery = true, value = "select d.* from departure as d")
    List<Departure> findAll();
}
