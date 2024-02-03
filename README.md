
<!DOCTYPE html>
<html>
<head>
    <title>音声ファイル再生リスト</title>
</head>
<body>
    <label for="fileInput">音声ファイルを選択してください：</label>
    <input type="file" id="fileInput" multiple accept=".mp3, .wav">
    <button onclick="playNext()">再生</button>
    <ul id="playlist"></ul>
    
    <input type="range" id="volumeSlider" min="0" max="1" step="0.01" value="1">
    
    <br>
    <div>
        <p>
        再生する回数
        </p>
        <input type="text" id="gets_number" size="1">
        </div>
    <br><br>

    <audio id="audioPlayer">
        Your browser does not support the audio element.
    </audio>
    <script src="sopotify.js"></script>
</body>
</html>
