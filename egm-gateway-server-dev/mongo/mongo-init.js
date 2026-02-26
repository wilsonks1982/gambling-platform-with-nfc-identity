// mongo-init.js

// Check if the replica set is already initiated
if (!rs.status().ok) {
  print("Replica set not initialized, attempting to initiate...");

  // Define the replica set configuration
  const cfg = {
    _id: "csReplicaSet",
    members: [
      { _id: 0, host: "localhost:27017" },
      { _id: 1, host: "localhost:27018" },
      { _id: 2, host: "localhost:27019" },
    ],
  };

  // Initiate the replica set with the configuration
  const result = rs.initiate(cfg);

  // Check if the initiation was successful
  if (result.ok) {
    print("Replica set initiated successfully.");
  } else {
    print("Failed to initiate replica set:", result.errmsg);
  }
} else {
  print("Replica set is already initialized.");
}
