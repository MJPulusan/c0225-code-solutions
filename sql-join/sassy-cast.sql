select "firstName" as "First Name",
      "lastName" as "Last Name"
from
    "films" as "f"
join
    "castMembers" using ("filmId")
join
    "actors" using ("actorId")
where
    "f"."title" = 'Jersey Sassy';
