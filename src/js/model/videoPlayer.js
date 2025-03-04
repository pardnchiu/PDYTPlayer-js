class videoPlayer {

    player;
    fullplayer;
    volume;

    constructor(config = {}) {
        this.type = config.type || "";
        this.volume = config.volume == null ? 50 : volume;
        this.defaultMute = config.mute || false;
        this.event = config.event || {};

        this.player = createElement("video", { preload: "auto", playsinline: "" }, [
            createElement("source", this[_video])
        ]);

        this.player.onloadedmetadata = _ => this.#stateReady();
        this.player.onplaying = _ => this.#statePlaying();
        this.player.onpause = _ => this.#statePause();
        this.player.onended = _ => this.#stateEnd();

        if (!isMobile) {
            return;
        };

        // * 加入手機版全螢幕
        this.fullplayer = createElement("video.PDFullPlayer", { preload: "metadata", playsinline: null }, [
            createElement("source", this[_video])
        ]);

        // * 加入狀態偵測
        this.fullplayer.onplaying = _ => this.#stateFullPlaying();
        this.fullplayer.onpause = _ => this.#stateFullPause();
        this.fullplayer.onended = _ => this.#stateEnd();

        // // * 偵測全螢幕狀態
        // if (isIOS) {
        //     this.#fullPlayer.addEventListener("webkitpresentationmodechanged", _ => {
        //         this.stateFull = this.#fullPlayer.webkitPresentationMode === "fullscreen";
        //     });
        // }
        // else {
        //     this.#fullPlayer.addEventListener("fullscreenchange", _ => {
        //         this.stateFull = document.fullscreenElement === this.#fullPlayer;
        //     });
        // };
    }

    #stateReady() {
        if (this.event.ready != null) {
            this.event.ready();
        };

        this.sec = 0;

        this.setVolume(this.volume);
        this.setMute(this.defaultMute);
    };

    #statePlaying() {
        if (this.event.playing != null) {
            this.event.playing();
        };

        this.#setCurrentTime();
    };

    #setCurrentTime() {
        const total = this.getDuration();

        this.videoTimer = setInterval(() => {
            const sec = this.#getCurrentTime();

            this.panel.setCurrent(sec, this.getDuration());

            if (Math.ceil(sec) < total) {
                return;
            };

            clearInterval(this.videoTimer);
        }, 100);
    };

    #getCurrentTime() {
        return Math.ceil(this.currentTime);
    };

    #statePause() {
        if (this.event.pause != null) {
            this.event.pause();
        };

        clearInterval(this.videoTimer);
    };

    #stateEnd() {
        if (typeof this.event.end == "function") {
            this.event.end()
        };

        clearInterval(this.videoTimer);


        this.player.currentTime = 0;
    };

    #stateFullPlaying() {
        // * 停止 `mediaplayer`
        this.pause();
        // * 跳轉至 `mediaplayer` 進度
        this.seekTo(this.#getCurrentTime(), true);
        // * 更改為 `mediaplayer` 音量
        this.setVolume(this.getVolume(), true);
        // * 更改為 `mediaplayer` 速度
        this.setPlaybackRate(this.getPlaybackRate(), true);
        // * 繼續播放 `fullscreen` 影片 (`seekTo` 會暫停播放)
        this.play(true);
    };

    #stateFullPause() {
        // * `fullplayer` 秒數
        const sec = this.#getCurrentTime(true);
        // * 更改為 `fullplayer` 進度
        this.seekTo(sec);
        // * 更改為 `fullplayer` 音量
        this.setVolume(this.getVolume(true));
        // * 更改為 `fullplayer` 速度
        this.setPlaybackRate(this.getPlaybackRate(true));
    };

    // * 跳轉至進度
    seekTo(sec) {
        player.currentTime = sec;

        this.pause();
    };

    // * 暫停影片
    pause() {
        player.pause()
    };

    // * 設定速率
    setPlaybackRate(num) {
        player.playbackRate = num;
    };

    // * 取得時長
    getDuration() {
        return Math.ceil(player.duration);
    };

    // * 更改音量
    setVolume(num) {
        if (num == null) {
            return;
        };

        this.volume = num;
        this.player.volume = num / 100;
    };

    // * 設定靜音
    setMute(bool) {
        if (bool == null) {
            return;
        };

        const isMuted = bool == null ? this.isMuted() : !bool;

        if (isMuted && this.volume === 0) {
            this.volume = 50;
            this.setVolume(50);
            return;
        };

        this.player.muted = !isMuted;
    };

    // * 是否靜音
    isMuted() {
        return player.muted;
    };
}