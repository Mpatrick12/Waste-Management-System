  
-- Create the database
CREATE DATABASE smart_waste_management;

-- Select the database
USE smart_waste_management;

-- Create the users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('Household User', 'Waste Collection Service', 'Administrator') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the waste collection schedules table
CREATE TABLE waste_collection_schedules (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    service_date DATE NOT NULL,
    description TEXT,
    status ENUM('Scheduled', 'Completed', 'Cancelled') DEFAULT 'Scheduled',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Create the recycling tracker table
CREATE TABLE recycling_tracker (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    item VARCHAR(100) NOT NULL,
    quantity INT NOT NULL,
    impact_metric FLOAT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Create the waste collection routes table
CREATE TABLE waste_collection_routes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    service_id INT NOT NULL,
    route_name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (service_id) REFERENCES users(id)
);

-- Create the performance metrics table
CREATE TABLE performance_metrics (
    id INT AUTO_INCREMENT PRIMARY KEY,
    service_id INT NOT NULL,
    metric_name VARCHAR(100) NOT NULL,
    metric_value FLOAT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (service_id) REFERENCES users(id)
);
