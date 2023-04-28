import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

export function App() {
  const formatUserName = (userName) => `@${userName}`;

  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="midudev"
        name="Miguel Angel Durán"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={false}
        userName="pheralb"
        name="Pablo Hernández"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="jaco9611"
        name="Jacobo Osorio Pizarro"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="petrogustavo"
        name="Gustavo Petro"
      />
    </section>
  );
}
