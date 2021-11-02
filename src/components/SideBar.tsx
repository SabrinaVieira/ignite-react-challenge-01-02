import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { api } from "../services/api";
import { Button } from "./Button";

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface ISideBar {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  setSelectedGenreId: Dispatch<SetStateAction<number>>;
}

export function SideBar(props: ISideBar) {
const {genres, setSelectedGenreId, selectedGenreId} = props;
function handleClickButton(id: number) {
  setSelectedGenreId(id);
}

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}