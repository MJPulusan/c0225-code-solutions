select
    "co"."name" as "Country",
    count("ci"."cityId") as "Number of Cities"
from
    "countries" as "co"
join
    "cities" as "ci" using ("countryId")
group by
    "co"."name";
