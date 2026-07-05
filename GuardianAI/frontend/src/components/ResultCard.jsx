function ResultCard({ result }) {
  if (!result) return null;

  return (
    <div
      style={{
        marginTop: 30,
        padding: 20,
        borderRadius: 12,
        background: "#f4f4f4",
      }}
    >
      <h2>Threat Level: {result.threat_level}</h2>

      <h3>Risk Score: {result.risk_score}</h3>

      <h3>Category: {result.category}</h3>

      <h3>Confidence: {result.confidence}</h3>

      <h3>Reasons</h3>

      <ul>
        {result.reasons?.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>

      <h3>Psychological Tricks</h3>

      <ul>
        {result.psychological_tricks?.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>

      <h3>Recommendation</h3>

      <p>{result.recommendation}</p>
    </div>
  );
}

export default ResultCard;