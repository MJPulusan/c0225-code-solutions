select
    "c"."firstName" as "First Name",
    "c"."lastName" as "Last Name",
    "p"."amount" as "Amount"
from
    "payments" as "p"
join
    "customers" as "c" using ("customerId")
order by
    "p"."amount" desc
limit 10;
