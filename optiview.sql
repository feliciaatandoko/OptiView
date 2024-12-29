CREATE DATABASE optiview;
USE optiview;

CREATE TABLE products(
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    brand VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    price DECIMAL(10,0) NOT NULL,
    image_url VARCHAR(100) NOT NULL,
    frame VARCHAR(50) NOT NULL
);

CREATE TABLE account(
    account_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    pass VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE transaction(
    transaction_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    account_id INT,
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    transaction_status VARCHAR(50) DEFAULT 'Pending Confirmation',
    location VARCHAR(100),
    payment VARCHAR(100),
    FOREIGN KEY (account_id) REFERENCES account(account_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

INSERT INTO products (brand, model, price, image_url, frame)
VALUES
    ('SmartBuy Collection', 'Vicari', 300000, 'asset/product_1.png', 'Cat Eye'),
    ('Tom Ford', 'FT5629-B Blue-Light Block', 4416000, 'asset/product_2.png', 'Round'),
    ('SmartBuy Collection', 'Murf', 879000, 'asset/product_3.png', 'Browline'),
    ('Lacoste', 'L3657', 1290000, 'asset/product_4.png', 'Square'),
    ('SmartBuy Collection', 'Maja', 432000, 'asset/product_5.png', 'Cat Eye'),
    ('Ray-Ban', 'RX6489', 2160000, 'asset/product_6.png', 'Aviator'),
    ('Tom Ford', 'FT5616-B Blue-Light Block 052', 3280000, 'asset/product_7.png', 'Cat Eye'),
    ('SmartBuy Collection', 'Grosmorne', 730000, 'asset/product_8.png', 'Round'),
    ('SmartBuy Collection', 'Leonidas', 432000, 'asset/product_9.png', 'Square'),
    ('Ray-Ban', 'RX7226 Phil', 2558000, 'asset/product_10.png', 'Aviator'),
    ('Tom Ford', 'FT5453', 4135000, 'asset/product_11.png', 'Browline'),
    ('Ray-Ban', 'RX6489 Aviator', 2160000, 'asset/product_12.png', 'Aviator'),
    ('Tommy Hilfiger', 'TJ0068', 1359000, 'asset/product_13.png', 'Round'),
    ('Ray-Ban', 'RX6434', 1836000, 'asset/product_14.png', 'Aviator'),
    ('BOSS', 'Boss 0976', 1948000, 'asset/product_15.png', 'Square'),
    ('Ray-Ban', 'RX5154 Clubmaster', 2293000, 'asset/product_16.png', 'Browline'),
    ('Ralph by Ralph Lauren', 'RA7135', 1295000, 'asset/product_17.png', 'Cat Eye'),
    ('Ray-Ban', 'RX3765V', 1949000, 'asset/product_18.png', 'Aviator'),
    ('SmartBuy Collection', 'Shire', 360000, 'asset/product_19.png', 'Square'),
    ('Tom Ford', 'FT5401', 3280000, 'asset/product_20.png', 'Round'),
    ('Levis', 'LV 1005', 970000, 'asset/product_21.png', 'Round'),
    ('SmartBuy Collection', 'Hadriane', 432000, 'asset/product_22.png', 'Browline'),
    ('Ralph by Ralph Lauren', 'RA7158U', 1295000, 'asset/product_23.png', 'Square'),
    ('Kate Spade', 'Danyelle', 990000, 'asset/product_24.png', 'Cat Eye'),
    ('Tom Ford', 'FT5557-B Blue-Light Block', 3280000, 'asset/product_25.png', 'Round'),
    ('Ray-Ban', 'RX6444', 1890000, 'asset/product_26.png', 'Aviator'),
    ('Ray-Ban', 'RX7216 New Clubmaster', 2293000, 'asset/product_27.png', 'Browline'),
    ('Calvin Klein', 'CK23522', 910000, 'asset/product_28.png', 'Square'),
    ('Prada', 'PR 11VY', 3161000, 'asset/product_29.png', 'Cat Eye'),
    ('Versace', 'VE1285', 2650000, 'asset/product_30.png', 'Browline');

INSERT INTO account (username, email, pass)
VALUES
    ('angell01', 'angelah@gmail.com', 'angela01'),
    ('alleluia', 'alle@binus.ac.id', 'alle01'),
    ('aliciajocelyn', 'alicia@binus.ac.id', 'alicia01'),
    ('feliciaa15', 'felicia@gmail.com', 'feli01'),
    ('jessicab', 'jessica@gmail.com', 'jess01');

CREATE TABLE contactus(
    contact_id INT AUTO_INCREMENT PRIMARY KEY,
    account_id INT,
    purpose VARCHAR(100) NOT NULL,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    message VARCHAR(500) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (account_id) REFERENCES account(account_id)
);