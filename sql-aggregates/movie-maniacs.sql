select
    "c"."firstName" as "First Name",
    "c"."lastName" as "Last Name",
    sum("payments"."amount") as "Total Paid"
from
    "customers" as "c"
join
    "payments" using ("customerId")
group by
 "c"."firstName", "c"."lastName"
order by
"Total Paid" desc;
