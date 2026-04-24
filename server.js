const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const dataFile = path.join(__dirname, 'participants.json');

app.use(express.json());
app.use(express.static(path.join(__dirname)));

function readParticipants() {
  try {
    if (!fs.existsSync(dataFile)) {
      return [];
    }
    const raw = fs.readFileSync(dataFile, 'utf-8');
    return JSON.parse(raw || '[]');
  } catch (error) {
    console.error('Failed to read participants:', error);
    return [];
  }
}

function writeParticipants(participants) {
  try {
    fs.writeFileSync(dataFile, JSON.stringify(participants, null, 2), 'utf-8');
  } catch (error) {
    console.error('Failed to save participants:', error);
  }
}

function sortParticipants(list) {
  return list.sort((a, b) => b.score - a.score || a.time - b.time);
}

app.get('/api/participants', (req, res) => {
  const participants = sortParticipants(readParticipants());
  res.json(participants);
});

app.post('/api/participants', (req, res) => {
  const participant = req.body;

  if (!participant || !participant.name || !participant.id || !participant.section) {
    return res.status(400).json({ error: 'Missing participant fields.' });
  }

  const participants = readParticipants();
  participants.push({
    name: participant.name,
    id: participant.id,
    section: participant.section,
    score: Number(participant.score) || 0,
    time: Number(participant.time) || 0,
    entryId: participant.entryId || `${participant.id}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  });

  writeParticipants(sortParticipants(participants));
  res.status(201).json(participants);
});

app.delete('/api/participants/:entryId', (req, res) => {
  const { entryId } = req.params;
  const participants = readParticipants();
  const filtered = participants.filter((participant) => participant.entryId !== entryId);

  if (filtered.length === participants.length) {
    return res.status(404).json({ error: 'Participant not found.' });
  }

  writeParticipants(sortParticipants(filtered));
  res.json(filtered);
});

app.listen(port, () => {
  console.log(`Harmony Quiz server running at http://localhost:${port}`);
});
