import React from "react";
import Link from "next/link";

const index = ({ users }) => {
  return (
    <div>
      <h2>This is users page: {users.length}</h2>
      {users.map((user) => (
        <p key={user.id}>
          {user.name}
          <Link href={`/users/${user.id}`}>
            <a>
              <button> Details</button>
            </a>
          </Link>
        </p>
      ))}
    </div>
  );
};

export default index;

export async function getStaticProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: { users }, // will be passed to the page component as props
  };
}
