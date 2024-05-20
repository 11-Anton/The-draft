import css from "./Profile.module.css";

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.container}>
      <div className={css.containerInfo}>
        <img className={css.svg} src={image} alt={name} />
        <p className={css.name}>{name}</p>
        <p className={css.st}>@{tag}</p>
        <p className={css.st}>{location}</p>
      </div>

      <ul className={css.items}>
        <li className={css.item}>
          <span>Followers</span>
          <span className={css.span}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span className={css.span}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span className={css.span}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
export default Profile;