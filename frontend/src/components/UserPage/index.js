import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUserSongs } from '../../store/userSongs';

const UserSongBrowser = () => {
  const {userId} = useParams();
  const {songId} = useParams();
  const userSongs = Object.values(useSelector(state => state.userSongs))
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserSongs(userId))
  }, [dispatch, userId])

  return (
    <main>
      <nav>
        {userSongs.map((userSong) => {
          return (
            <>
            <figure>
              <figcaption>
              <NavLink key={userSong.title} to={`/song/${userSong.id}`}>
                <div
                  className={
                    Number.parseInt(songId) === userSong.id
                      ? "nav-entry is-selected"
                      : "nav-entry"
                  }>

                  <div>
                    <div className="primary-text">
                        {userSong.title}
                    </div>
                  </div>
                </div>
              </NavLink>
              <NavLink key={userSong.User.username} to={`/artist/${userSong.userId}`}>
              <div
                className={
                  Number.parseInt(userId) === userSong.userId
                    ? "nav-entry is-selected"
                    : "nav-entry"
                }>

                <div>
                  <div className="primary-text">
                      {userSong.User.username}
                  </div>
                </div>
              </div>
            </NavLink>
            </figcaption>
            <audio
              controls
              src={userSong.songFile}>
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </figure>
          </>
          );
        })}
      </nav>
    </main>
  );
};

export default UserSongBrowser;
