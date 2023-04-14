package com.example.car_back_end.dto;

import com.example.car_back_end.model.CarType;
import com.example.car_back_end.model.Departure;
import com.example.car_back_end.model.Destination;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.sql.Time;
public class CarDto {
    private int id;
    @NotBlank(message = "biển số xe không được để trống")
    private String licensePlates;
    @NotBlank(message = "loại xe không được để trống")
    private CarType carType;
    @NotBlank(message = "tên nhà xe không được để trống")
    private String garage;
    @NotBlank(message = "số điện thoại không được để trống")
    private String phone;
    @Pattern(regexp = "/^([a-zA-Z0-9_\\.\\-])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$/gm")
    @NotBlank(message = "email không được để trống")
    private String email;
    @NotBlank(message = "thời gian xuất phát không được để trống")
    private Time departureTime;
    @NotBlank(message = "thời gian đến không được để trống")
    private Time arrivalTime;
    @NotBlank(message = "điểm xuất phát không được để trống")
    private Departure departure;
    @NotBlank(message = "điểm đến không được để trống")

    private Destination destination;
    public CarDto() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLicensePlates() {
        return licensePlates;
    }

    public void setLicensePlates(String licensePlates) {
        this.licensePlates = licensePlates;
    }

    public CarType getCarType() {
        return carType;
    }

    public void setCarType(CarType carType) {
        this.carType = carType;
    }

    public String getGarage() {
        return garage;
    }

    public void setGarage(String garage) {
        this.garage = garage;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Time getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(Time departureTime) {
        this.departureTime = departureTime;
    }

    public Time getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(Time arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public Departure getDeparture() {
        return departure;
    }

    public void setDeparture(Departure departure) {
        this.departure = departure;
    }

    public Destination getDestination() {
        return destination;
    }

    public void setDestination(Destination destination) {
        this.destination = destination;
    }


}
