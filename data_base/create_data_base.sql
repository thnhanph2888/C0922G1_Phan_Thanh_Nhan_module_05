create database restaurant_management_system;
use restaurant_management_system;

create table role (
  id int primary key,
  name varchar(100) NOT NULL
);

create table account (
  id int  primary key,
  username varchar(100) not null,
  password varchar(100) not null
);

create table account_role (
  account_id int,
  role_id int,
  primary key (account_id, role_id),
  foreign key (account_id) references account(id),
  foreign key (role_id) references role(id)
);

create table `position` (
   id int primary key,
   name varchar(50)
);

create table employee (
   id int primary key,
   name varchar(50),
   date_of_birth date,
   gender bit,
   email varchar(100),
   phone_number varchar(40),
   address varchar(255),
   is_deleted bit,
   position_id int,
   foreign key (position_id) references `position`(id),
   account_id int,
   foreign key (account_id) references account(id)
);

create table customer (
   id int primary key,
   name varchar(100),
   date_of_birth date,
   gender bit,
   email varchar(255),
   phone_number varchar(40),
   address varchar(255),
   is_deleted bit,
   account_id int,
   foreign key (account_id) references account(id)
);

create table type_of_food (
   id int primary key,
   name varchar(100)
);

create table food (
   id int primary key,
   name varchar(100),
   price double,
   quantity int, 
   description varchar(255),
   type_of_food_id int,
   foreign key (type_of_food_id) references type_of_food(id)
);

create table floor (
    id int primary key,
    name varchar(10)
);

create table section (
   id int primary key,
   name varchar(10),
   floor_id int,
   foreign key (floor_id) references floor(id)
);

create table table_dinner (
   id int primary key,
   name varchar(10),
   section_id int,
   foreign key (section_id) references section(id)
);

create table `order` (
    id int primary key,
    delivery_location varchar(255),
    customer_id int,
    foreign key (customer_id) references customer(id),
    employee_id int,
    foreign key (employee_id) references employee(id),
    total_price double,
    table_dinner_id int,
    foreign key (table_dinner_id) references table_dinner(id)
);

create table order_detail (
  order_id int,
  food_id int,
  foreign key (order_id) REFERENCES `order`(id),
  FOREIGN KEY (food_id) REFERENCES food(id)
);


