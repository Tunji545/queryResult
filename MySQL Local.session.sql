INSERT INTO checkouts.clients
  (id, user_id, book_id, checkout_date, return_date)
  VALUES
    (1, 1, 1, '2017-10-15 14:43:18',
              NULL),
    (2, 1, 2, '2017-10-05 16:22:44',
              '2017-10-13 13:0:12'),
    (3, 2, 2, '2017-10-15 11:11:24',
              '2017-10-22 17:47:10'),
    (4, 5, 3, '2017-10-15 09:27:07',
              NULL);