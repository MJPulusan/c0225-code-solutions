select
    "a"."line1" as "Line 1",
    "ci"."name" as "City",
    "a"."district" as "District",
    "co"."name" as "Country"
from
    "addresses" as "a"
join
    "cities" as "ci" using ("cityId")
join
    "countries" as "co" using ("countryId")
