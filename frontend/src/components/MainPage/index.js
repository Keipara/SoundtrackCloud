import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getSongs } from '../../store/songs';
import { getUsers } from '../../store/users';

const SongBrowser = () => {
  const { songId } = useParams();
  const {userId} = useParams();

  const songs = Object.values(useSelector(state => state.songs))
  const users = Object.values(useSelector(state => state.songs))
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongs())
  }, [dispatch])


  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])


  return (
    <main>
      <nav>
        {songs.map((song) => {
          return (
            <>
              <NavLink key={song.name} to={`/song/${song.id}`}>
                <div
                  className={
                    Number.parseInt(songId) === song.id
                      ? "nav-entry is-selected"
                      : "nav-entry"
                  }>

                  <div>
                    <div className="primary-text">
                        {song.title}
                    </div>
                  </div>
                </div>
              </NavLink>
              <NavLink key={song.userId} to={`/user/${song.userId}`}>
              <div
                className={
                  Number.parseInt(songId) === song.id
                    ? "nav-entry is-selected"
                    : "nav-entry"
                }>

                <div>
                  <div className="primary-text">
                      {song.title}
                  </div>
                  <div className="secondary-text">
                    {song.userId}
                  </div>
                </div>
              </div>
            </NavLink>
            </>
          );
        })}
      </nav>
    </main>
  );
};

export default SongBrowser;
