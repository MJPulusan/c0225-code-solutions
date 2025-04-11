select
    "f"."releaseYear" as "Release Year",
    "g"."name" as "Name"
from
    "films" as "f"
join
    "filmGenre" as "fg" using ("filmId")
join
    "genres" as "g" using ("genreId")
where
    "f"."title" = 'Boogie Amelie';
