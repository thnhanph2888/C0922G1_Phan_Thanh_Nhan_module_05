package com.example.car_back_end.repository;

import com.example.car_back_end.model.Car;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
@Transactional
public interface ICarRepository extends JpaRepository<Car, Integer> {
    @Query(nativeQuery = true, value = "select c.* from `car` as c")
    Page<Car> findAllPage(Pageable pageable);
    @Modifying(clearAutomatically = true)
    @Query(nativeQuery = true, value = "delete from `car` as c where c.id = :id")
    void delete(@Param("id")int id);
    @Modifying(clearAutomatically = true)
    @Query(nativeQuery = true, value = "insert into `car`(arrival_time" +
            "departure_time" +
            "email" +
            "garage" +
            "license_plates" +
            "phone" +
            "car_type_id" +
            "departure_id" +
            "destination_id) values" +
            "(:arrivalTime," +
            ":departureTime," +
            ":email," +
            ":garage," +
            ":licensePlates," +
            ":phone," +
            ":carTypeId," +
            ":departureId," +
            ":destinationId," +
            ")")
    void add(@Param("licensePlates")String licensePlates,
                @Param("carTypeId")int carTypeId,
                @Param("garage")String garage,
                @Param("phone")String phone,
                @Param("email")String email,
                @Param("departureTime")String departureTime,
                @Param("arrivalTime")String arrivalTime,
                @Param("departureId")int departureId,
                @Param("destinationId")int destinationId
                );
    @Modifying(clearAutomatically = true)
    @Query(nativeQuery = true, value = "update `car`" +
            "set arrival_time = :arrivalTime," +
            "departure_time = :departureTime," +
            "email = :email," +
            "garage = :garage," +
            "license_plates = :licensePlates," +
            "phone = :phone," +
            "car_type_id = :carTypeId," +
            "departure_id = :departureId," +
            "destinationId = :destinationId where `car`.id = :idUpdate")
    void update(@Param("idUpdate")int idUpdate,
                   @Param("licensePlates")String licensePlates,
                   @Param("carTypeId")int carTypeId,
                   @Param("garage")String garage,
                   @Param("phone")String phone,
                   @Param("email")String email,
                   @Param("departureTime")String departureTime,
                   @Param("arrivalTime")String arrivalTime,
                   @Param("departureId")int departureId,
                   @Param("destinationId")int destinationId);
}
