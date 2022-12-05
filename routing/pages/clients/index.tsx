import Link from "next/link";
import React from "react";

const ClientsPage = () => {
  const clients = [
    { id: "joe", name: "Joe Pass" },
    { id: "tom", name: "Tom Jobim" },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>

      <ul>
        {clients.map((client, index) => (
          <li key={`clients_link--${client.id}__${index}`}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
