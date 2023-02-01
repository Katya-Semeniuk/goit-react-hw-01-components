
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from './dataBases/user.json';
import data from './dataBases/data.json';
import friends from './dataBases/friends.json';
import transactions from './dataBases/transaction.json';


export const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div
      style={{
        // height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: 'rgb(226, 225, 225)',
        paddingTop: '60px',
      }}
    >
      <Profile
        username ={username}
        tag={tag}
        location={location}
        imageUrl={avatar}
        stats={stats}
      />
    <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};


