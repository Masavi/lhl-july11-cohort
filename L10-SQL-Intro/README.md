# SQL Intro

## Topics to cover

- [x] Introduction to Databases and Database Management Systems (DBMS)
- [x] The Relational Data Model (Tables, Columns, Rows)
- [x] `SELECT` Statements
- [x] Filtering and ordering
- [x] Joining tables
- [x] Grouping records
- [x] Aggregation functions
- [x] `LIMIT` and `OFFSET`

### Extra content

- [PostgreSQL Full Tutorial](https://www.postgresqltutorial.com/)

- [PostgreSQL Docs](https://www.postgresql.org/docs/)


_**IMPORTANT NOTE**: In the video lecture i mention that a Database Management System (DBMS) is a software such as PG Admin for PostgreSQL, and that PostgreSQL is the actual Database **This is wrong**._

_**PostgreSQL, MySQL, Oracle SQL and others ARE DBMS**._

_A Database can be something as simple as an object (dictionary) in javascript. But when we use software to manage the database objects/data, that's when we called them DBMS._

### Relational Databases
--- 
It is a type of database that stores and provides access to data points that are related to one another. Relational databases are based on the **relational model**, which is a way of representing data in tables, using columns and rows.

Relational databases use the **Structured Query Language (SQL)** in order to access and manage data.

### Relational Database Management System (RDBMS)
--- 

It is a program that serves **and** controls interactions with one or more _Relational Databases_.

PostgreSQL is an example of a RDBMS because it allows you to create, update, read and delete multiple databases and its contents.

### The relational data model
---
Relational databases work with SQL.

The **S** in **SQL** is for _structured_. This means that our data must conform to a _structure_ in order to store it in the database.

- The data itself is stored in **tables** which define things such as field names, data types, and other data constraints (you are probably familiar with tables already if you've used programs like Excel or Calc)
- Tables are made up of **columns** and **rows**
  - Columns are called `fields`
  - Rows are called `records`
- Each table describes an entity (eg. `users`, `products`, `shifts`, `tweets`)
  - The fields represent properties of the entity
  - Each record represents one unique entity

#### Primary Keys

In order to reference a particular record in a table, each one is given a unique identifier we call a **Primary Key**

#### Foreign Keys (_Reference_)

Other tables can then make reference to a particular record in another table by storing the Primary Keys value. We call a Primary Key stored in another table a **Foreign Key**

- It is through this Primary Key/Foreign Key relationship that our tables are _related_ to one another

### The SQL syntax and clauses
---
#### CREATE TABLE

A relational database consists of multiple related tables. A table consists of rows and columns. Tables allow you to store structured data like customers, products, employees, etc.

To create a new table, you use the CREATE TABLE statement. The following illustrates the basic syntax of the CREATE TABLE statement

```sql
CREATE TABLE [IF NOT EXISTS] table_name (
   column1 datatype(length) column_contraint,
   column2 datatype(length) column_contraint,
   column3 datatype(length) column_contraint,
   table_constraints
);
```

We can specify the name of the columns, the datatype associated with that column and finally add constraints to each column to define behaviors, validations and limitations, such as the following example:

```sql
CREATE TABLE accounts (
	user_id SERIAL PRIMARY KEY,
	username VARCHAR ( 50 ) UNIQUE NOT NULL,
	password VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	created_on TIMESTAMP NOT NULL,
        last_login TIMESTAMP 
);
```

#### INSERT

INSERT inserts new rows into a table. One can insert one or more rows specified by value expressions, or zero or more rows resulting from a query.

We can insert data into an already created table in two ways:

- first, adding a single new row by using the default order of the columns of the table

```sql
INSERT INTO films VALUES
    ('UA502', 'Bananas', 105, '1971-07-13', 'Comedy', '82 minutes');
```

- second, by giving the exact fields (columns) to be inserted before inserting the actual values:

```sql
INSERT INTO films (code, title, did, date_prod, kind)
    VALUES ('T_601', 'Yojimbo', 106, '1961-06-16', 'Drama');
```


#### SELECT

In SQL we can use _clauses_ to perform _queries_ to our databases.

The **SELECT** clause queries the database and returns records that match the query.

- Always accompanied by the **FROM** keyword which indicates which table we'd like to query
- **SELECT** takes a list of field names as an argument
- Every SQL command ends in a semicolon (;), that's how we tell the application that we are finished entering our query

```sql
-- basic SELECT query
SELECT username, email FROM users;

-- the asterisk (*) can be used as a wildcard to return all fields in the table
SELECT * FROM users;

-- it is customary to put each SQL clause or keyword on a separate line for readability
SELECT username, email
FROM users;
```

#### Filtering and Ordering

We use `WHERE` to filter our results
- If the record satisfies the `WHERE` criteria (eg. before a certain date, greater than a certain amount), it is included in the query results
- NOTE: using the `WHERE` clause can filter your records down to zero (ie. no records satisfy the filter criteria)

```sql
SELECT *
FROM table_one
-- return only records where date_due is before the current date
WHERE date_due < NOW();
```

Order your results with the `ORDER BY` clause. We specify the field that we want to sort by and the sort direction
- Sort direction is either ascending (`ASC`) or descending (`DESC`)
- NOTE: the default sort direction is ascending (`ASC`) so you don't need to specify it

```sql
SELECT *
FROM table_one
ORDER BY field_one;

-- or in descending order
ORDER BY field_one DESC;
```

#### Connecting tables together

We connect tables together using **JOIN**s. The tables are joined together using the primary key and foreign key

There are various types of joins:
  - `INNER JOIN`: The default. Return only records that have matching records in the other table
  - `LEFT JOIN`: Return all records from the "left" table and only those from the other table that match
  - `RIGHT JOIN`: The same as a _LEFT JOIN_, but from the _RIGHT_ instead
  - `FULL OUTER JOIN`: Return all records from both tables

```sql
-- basic INNER JOIN
SELECT *
FROM table_one
INNER JOIN table_two
ON table_one.id = table_two.table_one_id;

-- since it is the default, you don't have to specify "INNER"
SELECT *
FROM table_one
JOIN table_two
ON table_one.id = table_two.table_one_id;
```

### Grouping Records

Records that contain the same values (eg. **students** with the same `cohort_id`) can be _grouped_ together using the `GROUP BY` clause
- If the records contain any unique values, they will not be grouped together

```sql
SELECT cohort_id, COUNT(cohort_id) AS num_students
FROM students
GROUP BY cohort_id;
```

### Aggregation Functions

Aggregation functions give us meta data about our records (eg. count responses, average player score, get minimum value)

Some aggregation functions:

| Function | Purpose                                        | Example Usage                        |
| :------- | :--------------------------------------------- | :----------------------------------- |
| `COUNT`  | Return the number of records grouped together  | `COUNT(*) AS num_users`              |
| `SUM`    | Add the values of the specified field together | `SUM(player_score) AS total_score`   |
| `MIN`    | Return the minimum value from the field        | `MIN(player_score) AS lowest_score`  |
| `MAX`    | Return the maximum value                       | `MAX(player_score) AS high_score`    |
| `AVG`    | Return the average value                       | `AVG(player_score) AS average_score` |

### `LIMIT` and `OFFSET`

We can limit the amount of records returned from a query using `LIMIT`. This keyword an _integer_ as an argument 

```sql
SELECT *
FROM table_one
-- only return 50 records
LIMIT 50;
```

- NOTE: `LIMIT` runs **after** `ORDER BY` (ie. sort your records then specify how many to return)

```sql
SELECT *
FROM table_one
-- order by a field(s)
ORDER BY field_name DESC
-- return the top 10
LIMIT 10;
```

We can skip any number of records using `OFFSET`; it also accepts an _integer_ as an argument

```sql
SELECT *
FROM table_one
-- skip the first 10 records
OFFSET 10;
```

- `OFFSET` and `LIMIT` work hand-in-hand to create [pagination](https://en.wikipedia.org/wiki/Pagination)

```sql
SELECT *
FROM table_one
-- skip the first 20 records, return the next 10
LIMIT 10 OFFSET 20;

-- you can specify these in any order
OFFSET 20 LIMIT 10;
```


