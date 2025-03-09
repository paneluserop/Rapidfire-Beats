

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1119979840423079957", "1273178612333543426"], 
  mongodbUri : "mongodb+srv://rapidfire:rapidfire@rapidbots.0atal.mongodb.net/?retryWrites=true&w=majority",
  spotifyClientId : "9492d80a2ef7470e85127ddf3c3d8355",
  spotifyClientSecret : "9e1a55e86edb46c8a8c23d94be80feab",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "XX",
      password: "enteryourcustompass",
      host: "180.188.226.76",
      port:  7019,
      secure: false
    }
  ]
}
