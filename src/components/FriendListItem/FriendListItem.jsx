import css from './FriendListItem.module.css';

export const FriendsListItem = ({ id, name, avatar, isOnline }) => {
  const online = isOnline ? 'green' : 'red';
  const isOnlineStyle = { backgroundColor: online };
  return (
    <li className={css.item} key={id}>
      <span className={css.status} style={isOnlineStyle}>
        {isOnline}
      </span>
      <img className={css.avatart} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
