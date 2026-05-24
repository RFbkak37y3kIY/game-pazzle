(() => {
  'use strict';

  const STORAGE_KEYS = {
    settings: 'jigsaw.settings.v1',
    gameState: 'jigsaw.gameState.v1',
    records: 'jigsaw.records.v1',
    profile: 'jigsaw.profile.v1',
    uploadImage: 'jigsaw.uploadImage.v1'
  };

  const DEFAULT_SETTINGS = {
    gridTargetSize: 4,
    rotationEnabled: true,
    showGridLines: true,
    hintOpacity: 0.15,
    muted: false,
    language: 'ru',
    vibrationEnabled: true,
    compactUi: false
  };

  const DEFAULT_PROFILE = {
    rewardPoints: 0,
    totalWins: 0,
    dailyWins: 0,
    achievements: {
      firstWin: false,
      speedRunner: false,
      strategist: false,
      dailyHero: false,
      veteran: false
    }
  };

  const ACHIEVEMENTS = [
    { key: 'firstWin', points: 50, icon: 'T' },
    { key: 'speedRunner', points: 120, icon: 'S' },
    { key: 'strategist', points: 90, icon: 'M' },
    { key: 'dailyHero', points: 140, icon: 'D' },
    { key: 'veteran', points: 180, icon: 'V' }
  ];

  const TEXTS = {
    ru: {
      appTitle: 'Jigsaw Studio',
      brandSubtitle: 'Соберите картинку. Играйте офлайн. Улучшайте рекорды.',
      labelTime: 'Время',
      labelMoves: 'Ходы',
      labelProgress: 'Прогресс',
      install: 'Установить',
      settings: 'Настройки',
      soundOn: 'Звук: вкл',
      soundOff: 'Звук: выкл',
      reset: 'Сбросить',
      sectionImage: 'Изображение',
      uploadTitle: 'Загрузить фото',
      uploadHint: 'PNG, JPG, WEBP до 10MB',
      sectionDifficulty: 'Сложность',
      sectionMode: 'Режим',
      labelRotation: 'Вращение деталей',
      labelGridLines: 'Контуры сетки',
      labelHintOpacity: 'Прозрачность подсказки',
      sectionApp: 'Приложение',
      shuffle: 'Перемешать',
      solve: 'Автосборка',
      pause: 'Пауза',
      resume: 'Продолжить',
      daily: 'Челлендж дня',
      continue: 'Продолжить',
      screenshot: 'Скриншот',
      sectionRecords: 'Рекорды',
      sectionAchievements: 'Достижения',
      sectionRewards: 'Награды',
      victoryTitle: 'Пазл собран!',
      victorySubtitle: 'Отличная работа. Результат сохранен в рекорды.',
      playAgain: 'Играть снова',
      close: 'Закрыть',
      settingsTitle: 'Настройки',
      settingsSubtitle: 'Персонализируйте игру под себя.',
      labelLanguage: 'Язык интерфейса',
      labelVibration: 'Вибрация при фиксации',
      labelCompactUI: 'Компактный интерфейс',
      saveSettings: 'Сохранить',
      loadingImage: 'Загрузка изображения...',
      pauseOverlayTitle: 'Пауза',
      pauseOverlayText: 'Игра остановлена. Нажмите «Продолжить», чтобы вернуться.',
      noRecord: 'нет рекорда',
      movesWord: 'ходов',
      pointsUnit: 'XP',
      loadedImage: 'Изображение: {name}',
      saveFound: 'Найдена сохраненная сессия. Нажмите «Продолжить».',
      saveRestored: 'Прогресс восстановлен',
      saveMissing: 'Сохраненная сессия не найдена',
      saveBroken: 'Сохранение повреждено и удалено',
      gameReset: 'Игра сброшена',
      puzzleShuffled: 'Детали перемешаны',
      solving: 'Автосборка выполняется',
      paused: 'Пауза включена',
      resumed: 'Игра продолжается',
      installed: 'Приложение установлено',
      installedToDevice: 'Jigsaw Studio добавлен на устройство',
      installUnavailable: 'Установка пока недоступна в этом браузере',
      screenshotSaved: 'Скриншот сохранен',
      online: 'Вы снова онлайн',
      offline: 'Офлайн-режим активен',
      fileTooBig: 'Файл слишком большой. Лимит 10MB',
      uploadFirst: 'Сначала загрузите изображение',
      challenge: 'Челлендж дня: {value}',
      rewardToast: 'Получено наград: +{points} XP',
      newRecord: 'Новый рекорд для этой сложности',
      settingsSaved: 'Настройки сохранены',
      nextStep: 'Далее',
      startGame: 'Начать игру',
      homeScreen: 'На главный экран',
      mobileImageEyebrow: 'Старт',
      mobileImageSubtitle: 'Выберите картинку или загрузите свою, чтобы начать новую игру.',
      mobileSelectedEmpty: 'Изображение не выбрано',
      mobileSelectedHint: 'Выберите пресет или загрузите фото.',
      mobileSetupHint: 'Настройте параметры и начните сборку.',
      mobileActualGrid: 'Реальная сетка',
      mobileResultEyebrow: 'Финиш',
      mobileResultSubtitle: 'Отличная работа. Вы можете повторить игру или вернуться на главный экран.',
      mobileExitPrompt: 'Вернуться к настройкам? Текущая игра останется в сохранении.',
      mobileBack: 'Назад',
      ach_firstWin_title: 'Первый триумф',
      ach_firstWin_desc: 'Соберите пазл полностью один раз.',
      ach_speedRunner_title: 'Скоростной сборщик',
      ach_speedRunner_desc: 'Соберите 4x4+ быстрее 3 минут.',
      ach_strategist_title: 'Стратег',
      ach_strategist_desc: 'Победа с ходами не больше количества деталей x2.',
      ach_dailyHero_title: 'Герой дня',
      ach_dailyHero_desc: 'Победите в режиме Челлендж дня.',
      ach_veteran_title: 'Ветеран пазлов',
      ach_veteran_desc: 'Одержите 10 побед.'
    },
    en: {
      appTitle: 'Jigsaw Studio',
      brandSubtitle: 'Assemble the picture. Play offline. Beat your records.',
      labelTime: 'Time',
      labelMoves: 'Moves',
      labelProgress: 'Progress',
      install: 'Install',
      settings: 'Settings',
      soundOn: 'Sound: on',
      soundOff: 'Sound: off',
      reset: 'Reset',
      sectionImage: 'Image',
      uploadTitle: 'Upload photo',
      uploadHint: 'PNG, JPG, WEBP up to 10MB',
      sectionDifficulty: 'Difficulty',
      sectionMode: 'Mode',
      labelRotation: 'Piece rotation',
      labelGridLines: 'Grid outlines',
      labelHintOpacity: 'Hint opacity',
      sectionApp: 'Application',
      shuffle: 'Shuffle',
      solve: 'Auto solve',
      pause: 'Pause',
      resume: 'Resume',
      daily: 'Daily challenge',
      continue: 'Continue',
      screenshot: 'Screenshot',
      sectionRecords: 'Records',
      sectionAchievements: 'Achievements',
      sectionRewards: 'Rewards',
      victoryTitle: 'Puzzle completed!',
      victorySubtitle: 'Great job. Result has been saved to records.',
      playAgain: 'Play again',
      close: 'Close',
      settingsTitle: 'Settings',
      settingsSubtitle: 'Personalize the game to your preference.',
      labelLanguage: 'Interface language',
      labelVibration: 'Vibrate on snap',
      labelCompactUI: 'Compact UI',
      saveSettings: 'Save',
      loadingImage: 'Loading image...',
      pauseOverlayTitle: 'Paused',
      pauseOverlayText: 'Game is paused. Press Resume to continue.',
      noRecord: 'no record',
      movesWord: 'moves',
      pointsUnit: 'XP',
      loadedImage: 'Image: {name}',
      saveFound: 'Saved session found. Press Continue.',
      saveRestored: 'Progress restored',
      saveMissing: 'Saved session was not found',
      saveBroken: 'Saved data was corrupted and removed',
      gameReset: 'Game reset',
      puzzleShuffled: 'Pieces shuffled',
      solving: 'Auto solving in progress',
      paused: 'Paused',
      resumed: 'Game resumed',
      installed: 'Application installed',
      installedToDevice: 'Jigsaw Studio added to your device',
      installUnavailable: 'Install prompt is unavailable in this browser',
      screenshotSaved: 'Screenshot saved',
      online: 'You are back online',
      offline: 'Offline mode enabled',
      fileTooBig: 'File is too large. 10MB limit',
      uploadFirst: 'Load an image first',
      challenge: 'Daily challenge: {value}',
      rewardToast: 'Rewards earned: +{points} XP',
      newRecord: 'New record for this difficulty',
      settingsSaved: 'Settings saved',
      nextStep: 'Next',
      startGame: 'Start game',
      homeScreen: 'Home',
      mobileImageEyebrow: 'Start',
      mobileImageSubtitle: 'Choose a picture or upload your own to start a new game.',
      mobileSelectedEmpty: 'No image selected',
      mobileSelectedHint: 'Pick a preset or upload a photo.',
      mobileSetupHint: 'Tune the settings and start the puzzle.',
      mobileActualGrid: 'Actual grid',
      mobileResultEyebrow: 'Finished',
      mobileResultSubtitle: 'Great job. You can replay the puzzle or return to the home screen.',
      mobileExitPrompt: 'Return to setup? Current progress will remain saved.',
      mobileBack: 'Back',
      ach_firstWin_title: 'First Triumph',
      ach_firstWin_desc: 'Complete a puzzle once.',
      ach_speedRunner_title: 'Speed Builder',
      ach_speedRunner_desc: 'Complete 4x4+ in under 3 minutes.',
      ach_strategist_title: 'Strategist',
      ach_strategist_desc: 'Win with moves not exceeding pieces x2.',
      ach_dailyHero_title: 'Daily Hero',
      ach_dailyHero_desc: 'Win in Daily Challenge mode.',
      ach_veteran_title: 'Puzzle Veteran',
      ach_veteran_desc: 'Achieve 10 total wins.'
    }
  };

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');

  const ui = {
    mobileShell: document.getElementById('mobileShell'),
    desktopShell: document.querySelector('.desktop-shell'),
    timer: document.getElementById('timer'),
    mobileTimer: document.getElementById('mobileTimer'),
    moves: document.getElementById('moves'),
    mobileMoves: document.getElementById('mobileMoves'),
    progress: document.getElementById('progress'),
    mobileProgress: document.getElementById('mobileProgress'),
    actualGridSize: document.getElementById('actualGridSize'),
    mobileActualGridSize: document.getElementById('mobileActualGridSize'),
    loadingOverlay: document.getElementById('loadingOverlay'),
    pauseOverlay: document.getElementById('pauseOverlay'),
    victoryModal: document.getElementById('victoryModal'),
    victoryTime: document.getElementById('victoryTime'),
    victoryMoves: document.getElementById('victoryMoves'),
    statusText: document.getElementById('statusText'),
    saveBadge: document.getElementById('saveBadge'),
    toast: document.getElementById('toast'),
    recordsBoard: document.getElementById('recordsBoard'),
    installBtn: document.getElementById('installBtn'),
    settingsModal: document.getElementById('settingsModal'),
    achievementsBoard: document.getElementById('achievementsBoard'),
    rewardPoints: document.getElementById('rewardPoints'),
    mobileImageScreen: document.getElementById('mobileImageScreen'),
    mobileSetupScreen: document.getElementById('mobileSetupScreen'),
    mobileResultScreen: document.getElementById('mobileResultScreen'),
    mobileSelectedPreview: document.getElementById('mobileSelectedPreview'),
    mobilePreviewPlaceholder: document.getElementById('mobilePreviewPlaceholder'),
    mobileSelectedName: document.getElementById('mobileSelectedName'),
    mobileSelectedHint: document.getElementById('mobileSelectedHint'),
    mobileSetupPreview: document.getElementById('mobileSetupPreview'),
    mobileSetupPlaceholder: document.getElementById('mobileSetupPlaceholder'),
    mobileSetupName: document.getElementById('mobileSetupName'),
    mobileSetupHint: document.getElementById('mobileSetupHint'),
    mobilePlayHud: document.getElementById('mobilePlayHud'),
    mobileResultTime: document.getElementById('mobileResultTime'),
    mobileResultMoves: document.getElementById('mobileResultMoves'),
    mobileResultImageName: document.getElementById('mobileResultImageName')
  };

  const controls = {
    imageLoader: document.getElementById('imageLoader'),
    gridSelector: document.getElementById('gridSelector'),
    mobileGridSelector: document.getElementById('mobileGridSelector'),
    rotationToggle: document.getElementById('rotationToggle'),
    mobileRotationToggle: document.getElementById('mobileRotationToggle'),
    gridLinesToggle: document.getElementById('gridLinesToggle'),
    mobileGridLinesToggle: document.getElementById('mobileGridLinesToggle'),
    hintOpacity: document.getElementById('hintOpacity'),
    mobileHintOpacity: document.getElementById('mobileHintOpacity'),
    opacityValue: document.getElementById('opacityValue'),
    mobileHintValue: document.getElementById('mobileHintValue'),
    langSelect: document.getElementById('langSelect'),
    vibrationToggle: document.getElementById('vibrationToggle'),
    compactUiToggle: document.getElementById('compactUiToggle'),
    muteBtn: document.getElementById('muteBtn'),
    settingsBtn: document.getElementById('settingsBtn'),
    resetBtn: document.getElementById('resetBtn'),
    shuffleBtn: document.getElementById('shuffleBtn'),
    solveBtn: document.getElementById('solveBtn'),
    pauseBtn: document.getElementById('pauseBtn'),
    dailyBtn: document.getElementById('dailyBtn'),
    continueBtn: document.getElementById('continueBtn'),
    screenshotBtn: document.getElementById('screenshotBtn'),
    playAgainBtn: document.getElementById('playAgainBtn'),
    closeModalBtn: document.getElementById('closeModalBtn'),
    saveSettingsBtn: document.getElementById('saveSettingsBtn'),
    closeSettingsBtn: document.getElementById('closeSettingsBtn'),
    mobileUploadBtn: document.getElementById('mobileUploadBtn'),
    mobileContinueSavedBtn: document.getElementById('mobileContinueSavedBtn'),
    mobileImageNextBtn: document.getElementById('mobileImageNextBtn'),
    mobileSetupBackBtn: document.getElementById('mobileSetupBackBtn'),
    mobileStartGameBtn: document.getElementById('mobileStartGameBtn'),
    mobileBackBtn: document.getElementById('mobileBackBtn'),
    mobilePlayPauseBtn: document.getElementById('mobilePlayPauseBtn'),
    mobilePlaySettingsBtn: document.getElementById('mobilePlaySettingsBtn'),
    mobileRepeatBtn: document.getElementById('mobileRepeatBtn'),
    mobileHomeBtn: document.getElementById('mobileHomeBtn')
  };

  const presetButtons = Array.from(document.querySelectorAll('.controls-panel .preset-btn'));
  const mobilePresetButtons = Array.from(document.querySelectorAll('.mobile-preset-btn'));

  class JigsawAudio {
    constructor() {
      this.ctx = null;
      this.muted = false;
    }

    init() {
      if (!this.ctx) {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playTone(freq, type, duration, volume = 0.1, delay = 0) {
      if (this.muted) {
        return;
      }

      this.init();
      setTimeout(() => {
        try {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();

          osc.type = type;
          osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

          gain.gain.setValueAtTime(volume, this.ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start();
          osc.stop(this.ctx.currentTime + duration);
        } catch (err) {
          console.warn('Audio error:', err);
        }
      }, delay * 1000);
    }

    playClick() {
      this.playTone(550, 'sine', 0.08, 0.08);
    }

    playSnap() {
      this.playTone(420, 'triangle', 0.16, 0.12);
      this.playTone(840, 'sine', 0.2, 0.08, 0.05);
    }

    playVictory() {
      const notes = [523.25, 659.25, 783.99, 1046.5, 1318.51];
      notes.forEach((freq, i) => this.playTone(freq, 'sine', 0.38, 0.1, i * 0.09));
    }

    playShuffle() {
      for (let i = 0; i < 7; i += 1) {
        this.playTone(110 + Math.random() * 280, 'triangle', 0.08, 0.06, i * 0.03);
      }
    }
  }

  const gameAudio = new JigsawAudio();

  let settings = { ...DEFAULT_SETTINGS };
  let records = {};
  let profile = { ...DEFAULT_PROFILE };

  let image = new Image();
  let isImageLoaded = false;
  let currentImageMeta = {
    src: '',
    name: '',
    type: 'preset',
    daily: false
  };

  let gridTargetSize = settings.gridTargetSize;
  let cols = 4;
  let rows = 4;

  let boardWidth = 0;
  let boardHeight = 0;
  let boardX = 0;
  let boardY = 0;
  let pieceWidth = 0;
  let pieceHeight = 0;

  let pieces = [];
  let particles = [];

  let draggedPiece = null;
  let dragOffsetX = 0;
  let dragOffsetY = 0;
  let startPointerX = 0;
  let startPointerY = 0;
  let startPointerTime = 0;
  let activePointerId = null;

  let isWon = false;
  let isPaused = false;
  let moveCount = 0;
  let secondsElapsed = 0;
  let timerInterval = null;
  let isGameActive = false;

  let deferredInstallPrompt = null;
  let toastTimeout = null;
  let saveDebounceTimer = null;
  let isDailyChallengeActive = false;
  let fallbackAttempted = false;
  let lastPersistTs = 0;
  let renderFrameId = 0;
  let isCanvasDirty = true;
  let hasActiveSolveAnimation = false;
  let hasActiveRotateAnimation = false;
  let isMobileLayout = false;
  let mobileScreen = 'image';
  let isDocumentVisible = document.visibilityState !== 'hidden';
  let selectedImageDraft = null;
  let mobileResultState = null;
  const boardLayerCanvas = document.createElement('canvas');
  const boardLayerCtx = boardLayerCanvas.getContext('2d');
  const lockedLayerCanvas = document.createElement('canvas');
  const lockedLayerCtx = lockedLayerCanvas.getContext('2d');
  let isBoardLayerDirty = true;
  let isLockedLayerDirty = true;

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function randomBetween(min, max) {
    if (max <= min) {
      return min;
    }
    return min + Math.random() * (max - min);
  }

  function normalizeRotation(rotation) {
    const value = rotation % 360;
    return value < 0 ? value + 360 : value;
  }

  function hasActiveCanvasAnimation() {
    return hasActiveSolveAnimation || hasActiveRotateAnimation || particles.length > 0;
  }

  function stopCanvasRender() {
    if (renderFrameId) {
      cancelAnimationFrame(renderFrameId);
      renderFrameId = 0;
    }
  }

  function scheduleCanvasRender() {
    isCanvasDirty = true;
    if (!isDocumentVisible || renderFrameId) {
      return;
    }

    renderFrameId = requestAnimationFrame(drawGame);
  }

  function markBoardLayerDirty() {
    isBoardLayerDirty = true;
  }

  function markLockedLayerDirty() {
    isLockedLayerDirty = true;
  }

  function resizeCacheLayer(layerCanvas, layerCtx, width, height, dpr) {
    layerCanvas.width = Math.max(1, width);
    layerCanvas.height = Math.max(1, height);
    layerCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function isMobileViewport() {
    return window.matchMedia('(max-width: 820px)').matches ||
      (window.matchMedia('(pointer: coarse)').matches && window.innerWidth <= 1024);
  }

  function syncPauseButtons() {
    controls.pauseBtn.textContent = isPaused ? t('resume') : t('pause');

    if (!controls.mobilePlayPauseBtn) {
      return;
    }

    const isPausedText = isPaused ? t('resume') : t('pause');
    controls.mobilePlayPauseBtn.setAttribute('aria-label', isPausedText);
    controls.mobilePlayPauseBtn.setAttribute('title', isPausedText);
    controls.mobilePlayPauseBtn.innerHTML = `<span aria-hidden="true">${isPaused ? '&#9654;' : '&#10074;&#10074;'}</span>`;
  }

  function syncHintOpacityLabels() {
    const percent = Math.round(settings.hintOpacity * 100);
    controls.opacityValue.textContent = `${percent}%`;
    if (controls.mobileHintValue) {
      controls.mobileHintValue.textContent = `${percent}%`;
    }
  }

  function syncPresetSelection(activeUrl) {
    presetButtons.forEach((btn) => btn.classList.toggle('active', btn.dataset.url === activeUrl));
    mobilePresetButtons.forEach((btn) => btn.classList.toggle('active', btn.dataset.url === activeUrl));
  }

  function updateMobileDraftPreview(targetImg, placeholder, previewSrc, fallbackAlt) {
    if (!targetImg || !placeholder) {
      return;
    }

    if (previewSrc) {
      targetImg.src = previewSrc;
      targetImg.alt = fallbackAlt;
      targetImg.classList.remove('hidden');
      placeholder.classList.add('hidden');
    } else {
      targetImg.removeAttribute('src');
      targetImg.classList.add('hidden');
      placeholder.classList.remove('hidden');
    }
  }

  function updateMobileSelectionUI() {
    const previewSrc = selectedImageDraft ? (selectedImageDraft.previewSrc || selectedImageDraft.src) : '';
    const name = selectedImageDraft ? selectedImageDraft.name : t('mobileSelectedEmpty');
    const hint = selectedImageDraft ? t('loadedImage', { name: selectedImageDraft.name }) : t('mobileSelectedHint');

    updateMobileDraftPreview(ui.mobileSelectedPreview, ui.mobilePreviewPlaceholder, previewSrc, name);
    updateMobileDraftPreview(ui.mobileSetupPreview, ui.mobileSetupPlaceholder, previewSrc, name);

    if (ui.mobileSelectedName) {
      ui.mobileSelectedName.textContent = name;
    }
    if (ui.mobileSelectedHint) {
      ui.mobileSelectedHint.textContent = hint;
    }
    if (ui.mobileSetupName) {
      ui.mobileSetupName.textContent = name;
    }
    if (ui.mobileSetupHint) {
      ui.mobileSetupHint.textContent = t('mobileSetupHint');
    }
    if (controls.mobileImageNextBtn) {
      controls.mobileImageNextBtn.disabled = !selectedImageDraft;
    }

    syncPresetSelection(selectedImageDraft && selectedImageDraft.type === 'preset' ? selectedImageDraft.src : '');
  }

  function setSelectedImageDraft(meta) {
    selectedImageDraft = meta ? {
      src: meta.src,
      name: meta.name,
      type: meta.type || 'preset',
      daily: Boolean(meta.daily),
      previewSrc: meta.previewSrc || meta.src
    } : null;

    updateMobileSelectionUI();
  }

  function syncMobileSettingsControls() {
    if (controls.mobileRotationToggle) {
      controls.mobileRotationToggle.checked = controls.rotationToggle.checked;
    }
    if (controls.mobileGridLinesToggle) {
      controls.mobileGridLinesToggle.checked = controls.gridLinesToggle.checked;
    }
    if (controls.mobileHintOpacity) {
      controls.mobileHintOpacity.value = controls.hintOpacity.value;
    }

    if (!isImageLoaded) {
      const targetText = `${gridTargetSize} x ${gridTargetSize} (${gridTargetSize * gridTargetSize})`;
      ui.actualGridSize.textContent = targetText;
      if (ui.mobileActualGridSize) {
        ui.mobileActualGridSize.textContent = targetText;
      }
    }

    syncHintOpacityLabels();
    updateGridSelectorUI();
  }

  function updateMobileResultUI() {
    if (!mobileResultState) {
      return;
    }

    ui.mobileResultTime.textContent = mobileResultState.time;
    ui.mobileResultMoves.textContent = mobileResultState.moves;
    ui.mobileResultImageName.textContent = mobileResultState.name;
  }

  function setMobileScreen(screen) {
    mobileScreen = screen;
    document.body.dataset.mobileScreen = screen;

    const screenMap = {
      image: ui.mobileImageScreen,
      setup: ui.mobileSetupScreen,
      result: ui.mobileResultScreen
    };

    Object.entries(screenMap).forEach(([key, el]) => {
      if (!el) {
        return;
      }
      const isActive = key === screen;
      el.classList.toggle('is-active', isActive);
      el.classList.toggle('hidden', !isActive);
    });

    const showMobileShell = isMobileLayout && screen !== 'play';
    ui.mobileShell.classList.toggle('hidden', !showMobileShell);
    ui.mobilePlayHud.classList.toggle('hidden', !isMobileLayout || screen !== 'play');

    if (screen === 'result') {
      updateMobileResultUI();
    }

    if (screen === 'play') {
      scheduleCanvasRender();
    }
  }

  function applyResponsiveLayout(preferredScreen = null) {
    const wasMobileLayout = isMobileLayout;
    const nextIsMobile = isMobileViewport();
    isMobileLayout = nextIsMobile;
    document.body.classList.toggle('is-mobile-layout', nextIsMobile);
    document.body.classList.toggle('is-desktop-layout', !nextIsMobile);

    if (!nextIsMobile) {
      ui.mobileShell.classList.add('hidden');
      ui.mobilePlayHud.classList.add('hidden');
      document.body.removeAttribute('data-mobile-screen');

      if (wasMobileLayout && !isImageLoaded && selectedImageDraft) {
        loadImage(selectedImageDraft.src, selectedImageDraft);
      }

      if (wasMobileLayout && isWon && mobileResultState) {
        ui.victoryTime.textContent = mobileResultState.time;
        ui.victoryMoves.textContent = mobileResultState.moves;
        ui.victoryModal.classList.remove('hidden');
      }

      return;
    }

    let targetScreen = preferredScreen || mobileScreen;
    if (isWon && mobileResultState) {
      targetScreen = 'result';
    } else if (preferredScreen) {
      targetScreen = preferredScreen;
    } else if (isImageLoaded && pieces.length && !isWon && (isGameActive || moveCount > 0 || isPaused)) {
      targetScreen = 'play';
    } else if (targetScreen === 'play' && !isImageLoaded) {
      targetScreen = selectedImageDraft ? 'setup' : 'image';
    }

    setMobileScreen(targetScreen || 'image');
  }

  function startConfiguredGame() {
    if (!selectedImageDraft) {
      showToast(t('uploadFirst'));
      setMobileScreen('image');
      return;
    }

    clearVictoryModal();
    mobileResultState = null;

    const nextSelection = { ...selectedImageDraft };
    if (isMobileLayout) {
      setMobileScreen('play');
    }
    loadImage(nextSelection.src, nextSelection, () => {
      resetGame();
      if (isMobileLayout) {
        setMobileScreen('play');
      }
    });
  }

  function pauseForMobileNavigation() {
    if (isGameActive && !isPaused && !isWon) {
      togglePause();
    }
  }

  function openSettingsModal({ pauseGame = false } = {}) {
    controls.langSelect.value = settings.language;
    controls.vibrationToggle.checked = settings.vibrationEnabled;
    controls.compactUiToggle.checked = settings.compactUi;

    if (pauseGame && isGameActive && !isPaused && !isWon) {
      togglePause();
    }

    ui.settingsModal.classList.remove('hidden');
  }

  function t(key, vars = {}) {
    const lang = TEXTS[settings.language] ? settings.language : 'ru';
    const dict = TEXTS[lang];
    const fallback = TEXTS.ru;
    let text = dict[key] || fallback[key] || key;

    Object.entries(vars).forEach(([name, value]) => {
      text = text.replace(`{${name}}`, value);
    });

    return text;
  }

  function setText(id, value) {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = value;
    }
  }

  function applyTranslations() {
    document.documentElement.lang = settings.language;
    document.title = t('appTitle');

    setText('mobileImageEyebrow', t('mobileImageEyebrow'));
    setText('mobileImageTitle', t('appTitle'));
    setText('mobileImageSubtitle', t('mobileImageSubtitle'));
    setText('mobileDifficultyTitle', t('sectionDifficulty'));
    setText('mobileModeTitle', t('sectionMode'));
    setText('mobileRotationLabel', t('labelRotation'));
    setText('mobileGridLinesLabel', t('labelGridLines'));
    setText('mobileHintLabel', t('labelHintOpacity'));
    setText('mobileActualGridLabel', t('mobileActualGrid'));
    setText('mobileResultEyebrow', t('mobileResultEyebrow'));
    setText('mobileResultTitle', t('victoryTitle'));
    setText('mobileResultSubtitle', t('mobileResultSubtitle'));
    setText('mobileResultTimeLabel', t('labelTime'));
    setText('mobileResultMovesLabel', t('labelMoves'));
    setText('mobileLabelTime', t('labelTime'));
    setText('mobileLabelMoves', t('labelMoves'));
    setText('mobileLabelProgress', t('labelProgress'));
    setText('brandSubtitle', t('brandSubtitle'));
    setText('labelTime', t('labelTime'));
    setText('labelMoves', t('labelMoves'));
    setText('labelProgress', t('labelProgress'));
    setText('sectionImage', t('sectionImage'));
    setText('uploadTitle', t('uploadTitle'));
    setText('uploadHint', t('uploadHint'));
    setText('sectionDifficulty', t('sectionDifficulty'));
    setText('sectionMode', t('sectionMode'));
    setText('labelRotation', t('labelRotation'));
    setText('labelGridLines', t('labelGridLines'));
    setText('labelHintOpacity', t('labelHintOpacity'));
    setText('sectionApp', t('sectionApp'));
    setText('sectionRecords', t('sectionRecords'));
    setText('sectionAchievements', t('sectionAchievements'));
    setText('labelRewards', t('sectionRewards'));
    setText('victoryTitle', t('victoryTitle'));
    setText('settingsTitle', t('settingsTitle'));
    setText('settingsSubtitle', t('settingsSubtitle'));
    setText('labelLanguage', t('labelLanguage'));
    setText('labelVibration', t('labelVibration'));
    setText('labelCompactUI', t('labelCompactUI'));
    setText('loadingText', t('loadingImage'));
    setText('pauseTitle', t('pauseOverlayTitle'));
    setText('pauseText', t('pauseOverlayText'));

    ui.installBtn.textContent = t('install');
    controls.settingsBtn.textContent = t('settings');
    controls.resetBtn.textContent = t('reset');
    controls.shuffleBtn.textContent = t('shuffle');
    controls.solveBtn.textContent = t('solve');
    controls.dailyBtn.textContent = t('daily');
    controls.continueBtn.textContent = t('continue');
    controls.screenshotBtn.textContent = t('screenshot');
    controls.playAgainBtn.textContent = t('playAgain');
    controls.closeModalBtn.textContent = t('close');
    controls.saveSettingsBtn.textContent = t('saveSettings');
    controls.closeSettingsBtn.textContent = t('close');
    controls.mobileUploadBtn.textContent = t('uploadTitle');
    controls.mobileContinueSavedBtn.textContent = t('continue');
    controls.mobileImageNextBtn.textContent = t('nextStep');
    controls.mobileSetupBackBtn.textContent = t('mobileBack');
    controls.mobileStartGameBtn.textContent = t('startGame');
    controls.mobileRepeatBtn.textContent = t('playAgain');
    controls.mobileHomeBtn.textContent = t('homeScreen');

    controls.mobileBackBtn.setAttribute('aria-label', t('mobileBack'));
    controls.mobileBackBtn.setAttribute('title', t('mobileBack'));
    controls.mobilePlaySettingsBtn.setAttribute('aria-label', t('settings'));
    controls.mobilePlaySettingsBtn.setAttribute('title', t('settings'));

    syncPauseButtons();

    const victorySubtitle = ui.victoryModal.querySelector('.modal-card p');
    if (victorySubtitle) {
      victorySubtitle.textContent = t('victorySubtitle');
    }

    controls.langSelect.value = settings.language;
    updateMobileSelectionUI();
    updateMobileResultUI();
    syncMobileSettingsControls();
    renderRecords();
    renderAchievements();
    updateMuteButton();
  }

  function getCanvasSize() {
    return {
      w: canvas.width / (window.devicePixelRatio || 1),
      h: canvas.height / (window.devicePixelRatio || 1)
    };
  }

  function getPointerPosition(e) {
    const rect = canvas.getBoundingClientRect();
    const { w, h } = getCanvasSize();

    const x = ((e.clientX - rect.left) / rect.width) * w;
    const y = ((e.clientY - rect.top) / rect.height) * h;
    return { x, y };
  }

  function showToast(message, timeout = 1800) {
    clearTimeout(toastTimeout);
    ui.toast.textContent = message;
    ui.toast.classList.remove('hidden');

    toastTimeout = setTimeout(() => {
      ui.toast.classList.add('hidden');
    }, timeout);
  }

  function setStatus(message) {
    ui.statusText.textContent = message;
  }

  function formatTime(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  function updateHeaderStats() {
    ui.timer.textContent = formatTime(secondsElapsed);
    ui.mobileTimer.textContent = formatTime(secondsElapsed);
    ui.moves.textContent = String(moveCount);
    ui.mobileMoves.textContent = String(moveCount);
    updateProgress();
  }

  function setSaveBadge(isDirty) {
    if (isDirty) {
      ui.saveBadge.textContent = 'Сохраняем...';
      ui.saveBadge.classList.add('dirty');
    } else {
      ui.saveBadge.textContent = 'Сохранено';
      ui.saveBadge.classList.remove('dirty');
    }
  }

  function scheduleSave() {
    setSaveBadge(true);
    clearTimeout(saveDebounceTimer);
    saveDebounceTimer = setTimeout(() => {
      persistGameState();
    }, 450);
  }

  function loadSettings() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.settings);
      if (raw) {
        const parsed = JSON.parse(raw);
        settings = { ...DEFAULT_SETTINGS, ...parsed };
      }
    } catch (err) {
      console.warn('Settings read error:', err);
      settings = { ...DEFAULT_SETTINGS };
    }

    gridTargetSize = settings.gridTargetSize;
    controls.rotationToggle.checked = settings.rotationEnabled;
    controls.gridLinesToggle.checked = settings.showGridLines;
    controls.hintOpacity.value = String(Math.round(settings.hintOpacity * 100));
    controls.opacityValue.textContent = `${Math.round(settings.hintOpacity * 100)}%`;
    controls.langSelect.value = settings.language;
    controls.vibrationToggle.checked = settings.vibrationEnabled;
    controls.compactUiToggle.checked = settings.compactUi;
    document.body.classList.toggle('compact-ui', settings.compactUi);

    syncHintOpacityLabels();
    updateGridSelectorUI();
    syncMobileSettingsControls();
    updateMuteButton();
  }

  function persistSettings() {
    settings.gridTargetSize = gridTargetSize;
    settings.rotationEnabled = controls.rotationToggle.checked;
    settings.showGridLines = controls.gridLinesToggle.checked;
    settings.hintOpacity = Number(controls.hintOpacity.value) / 100;
    settings.muted = gameAudio.muted;
    settings.language = controls.langSelect.value;
    settings.vibrationEnabled = controls.vibrationToggle.checked;
    settings.compactUi = controls.compactUiToggle.checked;

    try {
      localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(settings));
    } catch (err) {
      console.warn('Settings save error:', err);
    }
  }

  function loadRecords() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.records);
      records = raw ? JSON.parse(raw) : {};
    } catch (err) {
      console.warn('Records read error:', err);
      records = {};
    }
    renderRecords();
  }

  function saveRecords() {
    try {
      localStorage.setItem(STORAGE_KEYS.records, JSON.stringify(records));
    } catch (err) {
      console.warn('Records save error:', err);
    }
  }

  function loadProfile() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.profile);
      if (raw) {
        const parsed = JSON.parse(raw);
        profile = {
          ...DEFAULT_PROFILE,
          ...parsed,
          achievements: {
            ...DEFAULT_PROFILE.achievements,
            ...(parsed.achievements || {})
          }
        };
      }
    } catch (err) {
      console.warn('Profile read error:', err);
      profile = { ...DEFAULT_PROFILE };
    }
    renderAchievements();
  }

  function saveProfile() {
    try {
      localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(profile));
    } catch (err) {
      console.warn('Profile save error:', err);
    }
  }

  function renderAchievements() {
    if (!ui.achievementsBoard) {
      return;
    }

    ui.rewardPoints.textContent = String(profile.rewardPoints || 0);
    ui.achievementsBoard.innerHTML = '';

    ACHIEVEMENTS.forEach((entry) => {
      const unlocked = Boolean(profile.achievements[entry.key]);
      const item = document.createElement('div');
      item.className = `achievement-item ${unlocked ? '' : 'locked'}`;
      item.innerHTML = `
        <div class="achievement-badge">${entry.icon}</div>
        <div>
          <h3>${t(`ach_${entry.key}_title`)}</h3>
          <p>${t(`ach_${entry.key}_desc`)}</p>
        </div>
        <span class="achievement-points">+${entry.points} ${t('pointsUnit')}</span>
      `;
      ui.achievementsBoard.appendChild(item);
    });
  }

  function unlockAchievement(key) {
    if (profile.achievements[key]) {
      return false;
    }

    const achievement = ACHIEVEMENTS.find((item) => item.key === key);
    if (!achievement) {
      return false;
    }

    profile.achievements[key] = true;
    profile.rewardPoints += achievement.points;
    saveProfile();
    renderAchievements();
    showToast(t('rewardToast', { points: String(achievement.points) }), 2400);
    return true;
  }

  function evaluateAchievements(pieceCount) {
    profile.totalWins += 1;

    unlockAchievement('firstWin');

    if (gridTargetSize >= 4 && secondsElapsed <= 180) {
      unlockAchievement('speedRunner');
    }

    if (moveCount <= pieceCount * 2) {
      unlockAchievement('strategist');
    }

    if (isDailyChallengeActive) {
      profile.dailyWins += 1;
      unlockAchievement('dailyHero');
      isDailyChallengeActive = false;
    }

    if (profile.totalWins >= 10) {
      unlockAchievement('veteran');
    }

    profile.rewardPoints += 10;
    saveProfile();
    renderAchievements();
  }

  function renderRecords() {
    const keys = ['2', '3', '4', '5', '6', '7', '8'];
    ui.recordsBoard.innerHTML = '';

    keys.forEach((key) => {
      const row = document.createElement('div');
      row.className = 'record-item';
      const rec = records[key];

      if (rec) {
        row.innerHTML = `<span><strong>${key}x${key}</strong> • ${formatTime(rec.time)} • ${rec.moves} ${t('movesWord')}</span><span>${rec.date}</span>`;
      } else {
        row.innerHTML = `<span><strong>${key}x${key}</strong> • ${t('noRecord')}</span><span>—</span>`;
      }
      ui.recordsBoard.appendChild(row);
    });
  }

  function updateRecordIfNeeded() {
    const key = String(gridTargetSize);
    const current = records[key];
    const shouldUpdate = !current || secondsElapsed < current.time || (secondsElapsed === current.time && moveCount < current.moves);

    if (shouldUpdate) {
      const now = new Date();
      const date = `${String(now.getDate()).padStart(2, '0')}.${String(now.getMonth() + 1).padStart(2, '0')}.${now.getFullYear()}`;
      records[key] = {
        time: secondsElapsed,
        moves: moveCount,
        date
      };
      saveRecords();
      renderRecords();
      showToast(t('newRecord'));
    }
  }

  function updateContinueButtonVisibility() {
    const hasSave = Boolean(localStorage.getItem(STORAGE_KEYS.gameState));
    controls.continueBtn.disabled = !hasSave;
    controls.mobileContinueSavedBtn.disabled = !hasSave;
    if (hasSave) {
      controls.continueBtn.classList.remove('hidden');
      controls.mobileContinueSavedBtn.classList.remove('hidden');
    } else {
      controls.continueBtn.classList.add('hidden');
      controls.mobileContinueSavedBtn.classList.add('hidden');
    }
  }

  function persistGameState() {
    if (!isImageLoaded || !pieces.length) {
      setSaveBadge(false);
      return;
    }

    const now = Date.now();
    if (now - lastPersistTs < 900) {
      setSaveBadge(false);
      return;
    }

    const imageMetaToSave = {
      ...currentImageMeta,
      src: currentImageMeta.src
    };

    if (typeof imageMetaToSave.src === 'string' && imageMetaToSave.src.startsWith('data:')) {
      imageMetaToSave.src = '__LOCAL_UPLOAD__';
    }

    const data = {
      version: 1,
      savedAt: Date.now(),
      currentImageMeta: imageMetaToSave,
      gridTargetSize,
      cols,
      rows,
      secondsElapsed,
      moveCount,
      isGameActive,
      isWon,
      isPaused,
      pieces: pieces.map((piece) => ({
        gridX: piece.gridX,
        gridY: piece.gridY,
        x: piece.x,
        y: piece.y,
        rx: piece.rx,
        ry: piece.ry,
        rotation: piece.isRotating ? normalizeRotation(piece.rotateTo) : normalizeRotation(piece.rotation),
        isLocked: piece.isLocked,
        edges: piece.edges,
        isSolving: false,
        solveStartX: 0,
        solveStartY: 0,
        solveStartRot: 0,
        solveProgress: 0,
        isRotating: false,
        rotateFrom: 0,
        rotateTo: 0,
        rotateStartTs: 0,
        rotateDuration: 0
      }))
    };

    try {
      localStorage.setItem(STORAGE_KEYS.gameState, JSON.stringify(data));
      lastPersistTs = now;
      setSaveBadge(false);
      updateContinueButtonVisibility();
    } catch (err) {
      console.warn('Game save error:', err);
      showToast(settings.language === 'en' ? 'Unable to save progress' : 'Не удалось сохранить прогресс', 2400);
      setSaveBadge(false);
    }
  }

  function tryRestoreSavedState() {
    const raw = localStorage.getItem(STORAGE_KEYS.gameState);
    if (!raw) {
      showToast(t('saveMissing'));
      updateContinueButtonVisibility();
      return false;
    }

    let data;
    try {
      data = JSON.parse(raw);
    } catch (err) {
      console.warn('Saved state parse error:', err);
      localStorage.removeItem(STORAGE_KEYS.gameState);
      updateContinueButtonVisibility();
      showToast(t('saveBroken'));
      return false;
    }

    if (!data.currentImageMeta || !data.currentImageMeta.src || !Array.isArray(data.pieces)) {
      localStorage.removeItem(STORAGE_KEYS.gameState);
      updateContinueButtonVisibility();
      showToast(t('saveBroken'));
      return false;
    }

    const restoredMeta = { ...data.currentImageMeta };
    if (restoredMeta.src === '__LOCAL_UPLOAD__') {
      const uploaded = localStorage.getItem(STORAGE_KEYS.uploadImage);
      if (!uploaded) {
        localStorage.removeItem(STORAGE_KEYS.gameState);
        updateContinueButtonVisibility();
        showToast(t('saveBroken'));
        return false;
      }
      restoredMeta.src = uploaded;
      restoredMeta.type = 'upload';
    }

    if (isMobileLayout) {
      setMobileScreen('play');
    }

    gridTargetSize = clamp(Number(data.gridTargetSize) || 4, 2, 8);
    updateGridSelectorUI();

    loadImage(restoredMeta.src, restoredMeta, () => {
      cols = Number(data.cols) || cols;
      rows = Number(data.rows) || rows;
      calculateBoardGeometry();
      setSelectedImageDraft({ ...restoredMeta, previewSrc: restoredMeta.src });

      const { w, h } = getCanvasSize();
      pieces = data.pieces.map((piece) => ({
        ...piece,
        x: clamp(Number(piece.x) || (piece.rx || 0.5) * w, 20, w - 20),
        y: clamp(Number(piece.y) || (piece.ry || 0.5) * h, 20, h - 20),
        rx: Number(piece.rx) || 0.5,
        ry: Number(piece.ry) || 0.5,
        rotation: normalizeRotation(Number(piece.rotation) || 0),
        isLocked: Boolean(piece.isLocked),
        isSolving: false,
        solveStartX: 0,
        solveStartY: 0,
        solveStartRot: 0,
        solveProgress: 0,
        isRotating: false,
        rotateFrom: 0,
        rotateTo: 0,
        rotateStartTs: 0,
        rotateDuration: 0
      }));
      refreshAllPieceRenderCaches();

      isWon = Boolean(data.isWon);
      isPaused = false;
      secondsElapsed = Number(data.secondsElapsed) || 0;
      moveCount = Number(data.moveCount) || 0;
      isGameActive = Boolean(data.isGameActive) && !isWon;

      syncPauseButtons();
      ui.pauseOverlay.classList.add('hidden');
      updateHeaderStats();
      setStatus(t('saveRestored'));

      if (isGameActive) {
        startTimerInterval();
      }
      showToast(t('saveRestored'));
      if (isMobileLayout) {
        setMobileScreen('play');
      }
      scheduleSave();
    });

    return true;
  }

  function resizeCanvas() {
    const shell = canvas.parentElement;
    const dpr = window.devicePixelRatio || 1;

    canvas.width = Math.max(1, Math.floor(shell.clientWidth * dpr));
    canvas.height = Math.max(1, Math.floor(shell.clientHeight * dpr));

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    resizeCacheLayer(boardLayerCanvas, boardLayerCtx, canvas.width, canvas.height, dpr);
    resizeCacheLayer(lockedLayerCanvas, lockedLayerCtx, canvas.width, canvas.height, dpr);
    markBoardLayerDirty();
    markLockedLayerDirty();

    calculateGridDimensions();
    calculateBoardGeometry();
  }

  function calculateGridDimensions() {
    if (!isImageLoaded) {
      return;
    }

    const targetCount = gridTargetSize * gridTargetSize;
    const imgAspect = image.width / image.height;

    cols = Math.max(2, Math.round(Math.sqrt(targetCount * imgAspect)));
    rows = Math.max(2, Math.round(targetCount / cols));

    const actualTotal = cols * rows;
    ui.actualGridSize.textContent = `${cols} x ${rows} (${actualTotal})`;
    if (ui.mobileActualGridSize) {
      ui.mobileActualGridSize.textContent = `${cols} x ${rows} (${actualTotal})`;
    }
  }

  function calculateBoardGeometry() {
    if (!isImageLoaded) {
      return;
    }

    const { w, h } = getCanvasSize();
    const boardScale = w < 780 ? 0.78 : 0.64;

    const targetW = w * boardScale;
    const targetH = h * boardScale;

    const imgAspect = image.width / image.height;
    const targetAspect = targetW / targetH;

    if (imgAspect > targetAspect) {
      boardWidth = targetW;
      boardHeight = targetW / imgAspect;
    } else {
      boardHeight = targetH;
      boardWidth = targetH * imgAspect;
    }

    boardX = (w - boardWidth) / 2;
    boardY = (h - boardHeight) / 2;

    pieceWidth = boardWidth / cols;
    pieceHeight = boardHeight / rows;

    pieces.forEach((piece) => {
      if (piece.isLocked) {
        piece.x = boardX + piece.gridX * pieceWidth + pieceWidth / 2;
        piece.y = boardY + piece.gridY * pieceHeight + pieceHeight / 2;
      } else {
        piece.x = clamp(piece.rx * w, 20, w - 20);
        piece.y = clamp(piece.ry * h, 20, h - 20);
      }
    });

    if (pieces.length) {
      refreshAllPieceRenderCaches();
    }
  }

  function generateJigsawEdges() {
    const hEdges = [];
    const vEdges = [];

    for (let x = 0; x < cols; x += 1) {
      hEdges[x] = [];
      vEdges[x] = [];
      for (let y = 0; y < rows; y += 1) {
        hEdges[x][y] = y === rows - 1 ? 0 : (Math.random() < 0.5 ? 1 : -1);
        vEdges[x][y] = x === cols - 1 ? 0 : (Math.random() < 0.5 ? 1 : -1);
      }
    }

    return { hEdges, vEdges };
  }

  function scatterSinglePiece(piece, w, h) {
    const margin = Math.max(25, Math.min(w, h) * 0.03);
    const border = Math.floor(Math.random() * 4);

    let px = margin;
    let py = margin;

    if (border === 0) {
      px = randomBetween(margin, Math.max(margin, boardX - margin));
      py = randomBetween(margin, h - margin);
    } else if (border === 1) {
      const leftBoundary = boardX + boardWidth;
      px = randomBetween(leftBoundary + margin, w - margin);
      py = randomBetween(margin, h - margin);
    } else if (border === 2) {
      px = randomBetween(margin, w - margin);
      py = randomBetween(margin, Math.max(margin, boardY - margin));
    } else {
      const topBoundary = boardY + boardHeight;
      px = randomBetween(margin, w - margin);
      py = randomBetween(topBoundary + margin, h - margin);
    }

    piece.x = clamp(px, margin, w - margin);
    piece.y = clamp(py, margin, h - margin);
    piece.rx = piece.x / w;
    piece.ry = piece.y / h;
  }

  function initializePieces() {
    const { hEdges, vEdges } = generateJigsawEdges();
    pieces = [];

    const { w, h } = getCanvasSize();

    for (let x = 0; x < cols; x += 1) {
      for (let y = 0; y < rows; y += 1) {
        const piece = {
          gridX: x,
          gridY: y,
          isLocked: false,
          rotation: controls.rotationToggle.checked ? [0, 90, 180, 270][Math.floor(Math.random() * 4)] : 0,
          edges: {
            top: y === 0 ? 0 : -hEdges[x][y - 1],
            right: vEdges[x][y],
            bottom: hEdges[x][y],
            left: x === 0 ? 0 : -vEdges[x - 1][y]
          },
          isSolving: false,
          solveStartX: 0,
          solveStartY: 0,
          solveStartRot: 0,
          solveProgress: 0,
          isRotating: false,
          rotateFrom: 0,
          rotateTo: 0,
          rotateStartTs: 0,
          rotateDuration: 0,
          x: 0,
          y: 0,
          rx: 0,
          ry: 0
        };

        scatterSinglePiece(piece, w, h);
        pieces.push(piece);
      }
    }

    refreshAllPieceRenderCaches();
  }

  function drawJigsawEdge(path, x1, y1, x2, y2, type) {
    if (type === 0) {
      path.lineTo(x2, y2);
      return;
    }

    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.sqrt(dx * dx + dy * dy);
    const ux = dx / len;
    const uy = dy / len;

    const px = uy * type;
    const py = -ux * type;

    // Classic connector silhouette: flat edge -> narrow neck -> round crown -> narrow neck.
    const depth = len * 0.31;
    const flatInset = len * 0.30;
    const neckHalf = len * 0.058;
    const bulbHalf = len * 0.108;
    const crownHalf = len * 0.03;
    const neckY = depth * 0.1;
    const shoulderY = depth * 0.54;
    const tipY = depth * 0.96;
    const tangentLead = len * 0.065;
    const smoothness = 0.9;
    const midX = len * 0.5;

    const P = (u, v) => ({
      x: x1 + ux * u + px * v,
      y: y1 + uy * u + py * v
    });

    const anchors = [
      P(flatInset - tangentLead, 0),
      P(flatInset, 0),
      P(midX - neckHalf, neckY),
      P(midX - bulbHalf, shoulderY),
      P(midX - crownHalf, tipY),
      P(midX + crownHalf, tipY),
      P(midX + bulbHalf, shoulderY),
      P(midX + neckHalf, neckY),
      P(len - flatInset, 0),
      P(len - flatInset + tangentLead, 0)
    ];

    path.lineTo(anchors[1].x, anchors[1].y);

    for (let i = 1; i < anchors.length - 2; i += 1) {
      const prev = anchors[i - 1];
      const current = anchors[i];
      const next = anchors[i + 1];
      const afterNext = anchors[i + 2];

      const c1x = current.x + ((next.x - prev.x) * smoothness) / 6;
      const c1y = current.y + ((next.y - prev.y) * smoothness) / 6;
      const c2x = next.x - ((afterNext.x - current.x) * smoothness) / 6;
      const c2y = next.y - ((afterNext.y - current.y) * smoothness) / 6;

      path.bezierCurveTo(c1x, c1y, c2x, c2y, next.x, next.y);
    }

    path.lineTo(x2, y2);
  }

  function buildPiecePath(w, h, edges) {
    const x1 = -w / 2;
    const y1 = -h / 2;
    const x2 = w / 2;
    const y2 = -h / 2;
    const x3 = w / 2;
    const y3 = h / 2;
    const x4 = -w / 2;
    const y4 = h / 2;
    const path = new Path2D();

    path.moveTo(x1, y1);
    drawJigsawEdge(path, x1, y1, x2, y2, edges.top);
    drawJigsawEdge(path, x2, y2, x3, y3, edges.right);
    drawJigsawEdge(path, x3, y3, x4, y4, edges.bottom);
    drawJigsawEdge(path, x4, y4, x1, y1, edges.left);
    path.closePath();

    return path;
  }

  function drawPaddedImage(renderCtx, img, sx, sy, sw, sh, dx, dy, dw, dh, padding) {
    const pad = typeof padding === 'number'
      ? { left: padding, right: padding, top: padding, bottom: padding }
      : padding;

    const padLeft = sw * pad.left;
    const padRight = sw * pad.right;
    const padTop = sh * pad.top;
    const padBottom = sh * pad.bottom;

    let srcL = sx - padLeft;
    let srcT = sy - padTop;
    let srcW = sw + padLeft + padRight;
    let srcH = sh + padTop + padBottom;

    let destL = dx - dw * pad.left;
    let destT = dy - dh * pad.top;
    let destW = dw + dw * (pad.left + pad.right);
    let destH = dh + dh * (pad.top + pad.bottom);

    if (srcL < 0) {
      const overlap = -srcL;
      const destOverlap = overlap * (destW / srcW);
      srcL = 0;
      srcW -= overlap;
      destL += destOverlap;
      destW -= destOverlap;
    }

    if (srcT < 0) {
      const overlap = -srcT;
      const destOverlap = overlap * (destH / srcH);
      srcT = 0;
      srcH -= overlap;
      destT += destOverlap;
      destH -= destOverlap;
    }

    if (srcL + srcW > img.width) {
      const overlap = srcL + srcW - img.width;
      const destOverlap = overlap * (destW / srcW);
      srcW -= overlap;
      destW -= destOverlap;
    }

    if (srcT + srcH > img.height) {
      const overlap = srcT + srcH - img.height;
      const destOverlap = overlap * (destH / srcH);
      srcH -= overlap;
      destH -= destOverlap;
    }

    if (srcW > 0 && srcH > 0 && destW > 0 && destH > 0) {
      renderCtx.drawImage(img, srcL, srcT, srcW, srcH, destL, destT, destW, destH);
    }
  }

  function getPieceImagePadding(edges, w, h) {
    const basePad = 0.25;
    const horizontalTabPad = clamp(0.34 * (h / w) + 0.05, basePad, 0.58);
    const verticalTabPad = clamp(0.34 * (w / h) + 0.05, basePad, 0.58);

    return {
      left: edges.left === 1 ? horizontalTabPad : basePad,
      right: edges.right === 1 ? horizontalTabPad : basePad,
      top: edges.top === 1 ? verticalTabPad : basePad,
      bottom: edges.bottom === 1 ? verticalTabPad : basePad
    };
  }

  function buildPieceBitmap(piece, isLockedStyle) {
    const dpr = window.devicePixelRatio || 1;
    const strokePad = 3;
    const leftExtent = pieceWidth / 2 + pieceWidth * piece.imagePadding.left + strokePad;
    const rightExtent = pieceWidth / 2 + pieceWidth * piece.imagePadding.right + strokePad;
    const topExtent = pieceHeight / 2 + pieceHeight * piece.imagePadding.top + strokePad;
    const bottomExtent = pieceHeight / 2 + pieceHeight * piece.imagePadding.bottom + strokePad;
    const width = leftExtent + rightExtent;
    const height = topExtent + bottomExtent;
    const bitmapCanvas = document.createElement('canvas');
    const bitmapCtx = bitmapCanvas.getContext('2d');

    bitmapCanvas.width = Math.max(1, Math.ceil(width * dpr));
    bitmapCanvas.height = Math.max(1, Math.ceil(height * dpr));
    bitmapCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    bitmapCtx.translate(leftExtent, topExtent);
    bitmapCtx.clip(piece.path);

    const sx = piece.gridX * (image.width / cols);
    const sy = piece.gridY * (image.height / rows);
    const sw = image.width / cols;
    const sh = image.height / rows;

    drawPaddedImage(bitmapCtx, image, sx, sy, sw, sh, -pieceWidth / 2, -pieceHeight / 2, pieceWidth, pieceHeight, piece.imagePadding);

    bitmapCtx.shadowBlur = 0;
    bitmapCtx.shadowOffsetX = 0;
    bitmapCtx.shadowOffsetY = 0;
    bitmapCtx.strokeStyle = isLockedStyle ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.25)';
    bitmapCtx.lineWidth = 1.45;
    bitmapCtx.stroke(piece.path);

    bitmapCtx.strokeStyle = 'rgba(0,0,0,0.05)';
    bitmapCtx.lineWidth = 0.52;
    bitmapCtx.stroke(piece.path);

    return {
      canvas: bitmapCanvas,
      width,
      height,
      originX: leftExtent,
      originY: topExtent
    };
  }

  function updatePieceRenderCache(piece) {
    piece.path = buildPiecePath(pieceWidth, pieceHeight, piece.edges);
    piece.imagePadding = getPieceImagePadding(piece.edges, pieceWidth, pieceHeight);
    piece.bitmapUnlocked = buildPieceBitmap(piece, false);
    piece.bitmapLocked = buildPieceBitmap(piece, true);
  }

  function refreshAllPieceRenderCaches() {
    pieces.forEach((piece) => updatePieceRenderCache(piece));
    markLockedLayerDirty();
  }

  function drawPiece(renderCtx, piece) {
    if (!piece.path || !piece.imagePadding || !piece.bitmapUnlocked || !piece.bitmapLocked) {
      updatePieceRenderCache(piece);
    }

    const bitmap = piece.isLocked ? piece.bitmapLocked : piece.bitmapUnlocked;

    renderCtx.save();
    renderCtx.translate(piece.x, piece.y);
    renderCtx.rotate((piece.rotation * Math.PI) / 180);

    renderCtx.shadowColor = 'rgba(0, 0, 0, 0.46)';
    if (piece === draggedPiece) {
      renderCtx.shadowBlur = 16;
      renderCtx.shadowOffsetX = 8;
      renderCtx.shadowOffsetY = 8;
    } else if (!piece.isLocked) {
      renderCtx.shadowBlur = 7;
      renderCtx.shadowOffsetX = 4;
      renderCtx.shadowOffsetY = 4;
    } else {
      renderCtx.shadowBlur = 0;
      renderCtx.shadowOffsetX = 0;
      renderCtx.shadowOffsetY = 0;
    }

    renderCtx.drawImage(
      bitmap.canvas,
      -bitmap.originX,
      -bitmap.originY,
      bitmap.width,
      bitmap.height
    );

    renderCtx.restore();
  }

  function rebuildBoardLayer() {
    if (!isBoardLayerDirty) {
      return;
    }

    const { w, h } = getCanvasSize();
    boardLayerCtx.clearRect(0, 0, w, h);

    if (!isImageLoaded) {
      isBoardLayerDirty = false;
      return;
    }

    boardLayerCtx.fillStyle = '#081a16';
    boardLayerCtx.fillRect(boardX, boardY, boardWidth, boardHeight);

    if (settings.hintOpacity > 0) {
      boardLayerCtx.save();
      boardLayerCtx.globalAlpha = settings.hintOpacity;
      boardLayerCtx.drawImage(image, boardX, boardY, boardWidth, boardHeight);
      boardLayerCtx.restore();
    }

    boardLayerCtx.strokeStyle = '#2d5a4f';
    boardLayerCtx.lineWidth = 2.2;
    boardLayerCtx.strokeRect(boardX, boardY, boardWidth, boardHeight);

    if (controls.gridLinesToggle.checked) {
      boardLayerCtx.save();
      boardLayerCtx.strokeStyle = 'rgba(147, 209, 186, 0.3)';
      boardLayerCtx.lineWidth = 1;
      boardLayerCtx.setLineDash([5, 4]);

      for (let x = 1; x < cols; x += 1) {
        boardLayerCtx.beginPath();
        boardLayerCtx.moveTo(boardX + x * pieceWidth, boardY);
        boardLayerCtx.lineTo(boardX + x * pieceWidth, boardY + boardHeight);
        boardLayerCtx.stroke();
      }

      for (let y = 1; y < rows; y += 1) {
        boardLayerCtx.beginPath();
        boardLayerCtx.moveTo(boardX, boardY + y * pieceHeight);
        boardLayerCtx.lineTo(boardX + boardWidth, boardY + y * pieceHeight);
        boardLayerCtx.stroke();
      }
      boardLayerCtx.restore();
    }

    isBoardLayerDirty = false;
  }

  function rebuildLockedLayer() {
    if (!isLockedLayerDirty) {
      return;
    }

    const { w, h } = getCanvasSize();
    lockedLayerCtx.clearRect(0, 0, w, h);

    if (!isImageLoaded) {
      isLockedLayerDirty = false;
      return;
    }

    for (let i = 0; i < pieces.length; i += 1) {
      const piece = pieces[i];
      if (piece.isLocked) {
        drawPiece(lockedLayerCtx, piece);
      }
    }

    isLockedLayerDirty = false;
  }

  class Confetti {
    constructor(canvasWidth) {
      this.x = Math.random() * canvasWidth;
      this.y = -10 - Math.random() * 40;
      this.vx = (Math.random() - 0.5) * 4;
      this.vy = Math.random() * 6 + 4;
      this.size = Math.random() * 8 + 5;
      this.color = `hsl(${Math.random() * 360}, 100%, 65%)`;
      this.rotation = Math.random() * 360;
      this.rotationSpeed = (Math.random() - 0.5) * 8;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.vy += 0.04;
      this.rotation += this.rotationSpeed;
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.fillStyle = this.color;
      ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
      ctx.restore();
    }
  }

  function triggerVictoryParticles() {
    const { w } = getCanvasSize();
    particles = [];
    for (let i = 0; i < 140; i += 1) {
      particles.push(new Confetti(w));
    }
  }

  function updateAndDrawParticles() {
    const { h } = getCanvasSize();

    for (let i = particles.length - 1; i >= 0; i -= 1) {
      const p = particles[i];
      p.update();
      p.draw();
      if (p.y > h + 24) {
        particles.splice(i, 1);
      }
    }
  }

  function updateProgress() {
    const total = pieces.length || 1;
    const lockedCount = pieces.filter((piece) => piece.isLocked).length;
    const percentage = Math.round((lockedCount / total) * 100);
    ui.progress.textContent = `${percentage}%`;
    ui.mobileProgress.textContent = `${percentage}%`;
  }

  function getPieceAtPointer(x, y) {
    for (let i = pieces.length - 1; i >= 0; i -= 1) {
      const piece = pieces[i];
      if (piece.isLocked || piece.isSolving || piece.isRotating) {
        continue;
      }

      const distance = Math.hypot(x - piece.x, y - piece.y);
      const clickRadius = Math.max(pieceWidth, pieceHeight) * 0.56;
      if (distance < clickRadius) {
        return piece;
      }
    }

    return null;
  }

  function incrementMoves() {
    moveCount += 1;
    ui.moves.textContent = String(moveCount);
    scheduleSave();
  }

  function startPieceRotation(piece, delta = 90) {
    if (!piece || piece.isLocked || piece.isSolving) {
      return false;
    }

    const fromRotation = Number(piece.rotation) || 0;
    piece.isRotating = true;
    piece.rotateFrom = fromRotation;
    piece.rotateTo = fromRotation + delta;
    piece.rotateStartTs = performance.now();
    piece.rotateDuration = 150;
    hasActiveRotateAnimation = true;
    gameAudio.playClick();
    scheduleCanvasRender();
    return true;
  }

  function checkPiecePlacement(piece) {
    const targetX = boardX + piece.gridX * pieceWidth + pieceWidth / 2;
    const targetY = boardY + piece.gridY * pieceHeight + pieceHeight / 2;

    const dist = Math.hypot(piece.x - targetX, piece.y - targetY);
    const tolerance = pieceWidth * 0.36;

    if (dist < tolerance && normalizeRotation(piece.rotation) === 0) {
      piece.x = targetX;
      piece.y = targetY;
      piece.isLocked = true;
      markLockedLayerDirty();

      if (settings.vibrationEnabled && navigator.vibrate) {
        navigator.vibrate(14);
      }

      gameAudio.playSnap();
      incrementMoves();
      updateProgress();
      checkVictory();
    } else {
      incrementMoves();
    }
  }

  function checkVictory() {
    const allLocked = pieces.length > 0 && pieces.every((piece) => piece.isLocked);

    if (allLocked && !isWon) {
      isWon = true;
      stopTimerInterval();
      gameAudio.playVictory();
      triggerVictoryParticles();
      evaluateAchievements(pieces.length);
      updateRecordIfNeeded();
      persistGameState();
      mobileResultState = {
        time: formatTime(secondsElapsed),
        moves: String(moveCount),
        name: currentImageMeta.name || t('victoryTitle')
      };

      setTimeout(() => {
        ui.victoryTime.textContent = formatTime(secondsElapsed);
        ui.victoryMoves.textContent = String(moveCount);
        if (isMobileLayout) {
          updateMobileResultUI();
          setMobileScreen('result');
        } else {
          ui.victoryModal.classList.remove('hidden');
        }
      }, 780);
    }
  }

  function solvePuzzle() {
    if (!isImageLoaded || isWon) {
      return;
    }

    beginTimerIfNeeded();

    pieces.forEach((piece) => {
      if (!piece.isLocked && !piece.isSolving) {
        piece.isRotating = false;
        piece.rotateFrom = 0;
        piece.rotateTo = 0;
        piece.rotateStartTs = 0;
        piece.rotateDuration = 0;
        piece.isSolving = true;
        piece.solveStartX = piece.x;
        piece.solveStartY = piece.y;
        piece.solveStartRot = piece.rotation > 180 ? piece.rotation - 360 : piece.rotation;
        piece.solveProgress = 0;
      }
    });

    hasActiveSolveAnimation = true;
    setStatus(t('solving'));
    scheduleCanvasRender();
  }

  function scatterAllPieces() {
    if (!isImageLoaded || isWon) {
      return;
    }

    const { w, h } = getCanvasSize();

    pieces.forEach((piece) => {
      if (!piece.isLocked) {
        scatterSinglePiece(piece, w, h);
        piece.rotation = controls.rotationToggle.checked ? [0, 90, 180, 270][Math.floor(Math.random() * 4)] : 0;
        piece.isRotating = false;
        piece.rotateFrom = 0;
        piece.rotateTo = 0;
        piece.rotateStartTs = 0;
        piece.rotateDuration = 0;
      }
    });

    gameAudio.playShuffle();
    setStatus(t('puzzleShuffled'));
    scheduleSave();
    updateProgress();
    scheduleCanvasRender();
  }

  function clearVictoryModal() {
    ui.victoryModal.classList.add('hidden');
  }

  function resetRoundState() {
    isWon = false;
    isPaused = false;
    particles = [];
    hasActiveSolveAnimation = false;
    hasActiveRotateAnimation = false;
    moveCount = 0;
    secondsElapsed = 0;
    isGameActive = false;
    draggedPiece = null;

    stopTimerInterval();
    stopCanvasRender();
    markLockedLayerDirty();
    ui.pauseOverlay.classList.add('hidden');
    syncPauseButtons();
    clearVictoryModal();
    updateHeaderStats();
  }

  function resetGame() {
    if (!isImageLoaded) {
      return;
    }

    resetRoundState();
    calculateBoardGeometry();
    initializePieces();
    updateProgress();
    setStatus(t('gameReset'));
    scheduleSave();
    scheduleCanvasRender();
  }

  function startTimerInterval() {
    stopTimerInterval();
    timerInterval = setInterval(() => {
      secondsElapsed += 1;
      ui.timer.textContent = formatTime(secondsElapsed);
      if (secondsElapsed % 5 === 0) {
        scheduleSave();
      }
    }, 1000);
  }

  function stopTimerInterval() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  function beginTimerIfNeeded() {
    if (isGameActive || isWon) {
      return;
    }
    isGameActive = true;
    startTimerInterval();
  }

  function togglePause() {
    if (isWon || !isImageLoaded) {
      return;
    }

    isPaused = !isPaused;

    if (isPaused) {
      stopTimerInterval();
      ui.pauseOverlay.classList.remove('hidden');
      setStatus(t('paused'));
    } else {
      if (isGameActive) {
        startTimerInterval();
      }
      ui.pauseOverlay.classList.add('hidden');
      setStatus(t('resumed'));
    }

    syncPauseButtons();
    scheduleSave();
    scheduleCanvasRender();
  }

  function drawGame(frameTs) {
    renderFrameId = 0;

    if (!isDocumentVisible) {
      return;
    }

    if (!isCanvasDirty && !hasActiveCanvasAnimation()) {
      return;
    }

    let hasSolvingPieces = false;
    let hasRotatingPieces = false;
    const { w, h } = getCanvasSize();
    const currentFrameTs = typeof frameTs === 'number' ? frameTs : performance.now();

    for (let i = 0; i < pieces.length; i += 1) {
      const piece = pieces[i];
      if (!piece.isSolving) {
        if (piece.isRotating) {
          const rotateProgress = clamp((currentFrameTs - piece.rotateStartTs) / piece.rotateDuration, 0, 1);
          const rotateEase = rotateProgress * rotateProgress * (3 - 2 * rotateProgress);
          piece.rotation = piece.rotateFrom + (piece.rotateTo - piece.rotateFrom) * rotateEase;

          if (rotateProgress >= 1) {
            piece.isRotating = false;
            piece.rotation = normalizeRotation(piece.rotateTo);
            piece.rotateFrom = 0;
            piece.rotateTo = 0;
            piece.rotateStartTs = 0;
            piece.rotateDuration = 0;
          } else {
            hasRotatingPieces = true;
          }
        }

        continue;
      }

      piece.solveProgress += 0.042;
      if (piece.solveProgress >= 1) {
        piece.solveProgress = 1;
        piece.isSolving = false;
        piece.isRotating = false;
        piece.isLocked = true;
        markLockedLayerDirty();
        piece.rotation = 0;
        piece.rotateFrom = 0;
        piece.rotateTo = 0;
        piece.rotateStartTs = 0;
        piece.rotateDuration = 0;
        piece.x = boardX + piece.gridX * pieceWidth + pieceWidth / 2;
        piece.y = boardY + piece.gridY * pieceHeight + pieceHeight / 2;

        gameAudio.playSnap();
        updateProgress();
        checkVictory();
      } else {
        const t = piece.solveProgress;
        const ease = t * t * (3 - 2 * t);
        const targetX = boardX + piece.gridX * pieceWidth + pieceWidth / 2;
        const targetY = boardY + piece.gridY * pieceHeight + pieceHeight / 2;

        piece.x = piece.solveStartX + (targetX - piece.solveStartX) * ease;
        piece.y = piece.solveStartY + (targetY - piece.solveStartY) * ease;
        piece.rotation = piece.solveStartRot + (0 - piece.solveStartRot) * ease;
        piece.rx = piece.x / w;
        piece.ry = piece.y / h;
        hasSolvingPieces = true;
      }
    }

    hasActiveSolveAnimation = hasSolvingPieces;
    hasActiveRotateAnimation = hasRotatingPieces;
    rebuildBoardLayer();
    rebuildLockedLayer();

    ctx.clearRect(0, 0, w, h);
    isCanvasDirty = false;

    if (!isImageLoaded) {
      if (hasActiveCanvasAnimation()) {
        renderFrameId = requestAnimationFrame(drawGame);
      }
      return;
    }

    ctx.drawImage(boardLayerCanvas, 0, 0, w, h);
    ctx.drawImage(lockedLayerCanvas, 0, 0, w, h);

    for (let i = 0; i < pieces.length; i += 1) {
      const piece = pieces[i];
      if (!piece.isLocked && piece !== draggedPiece) {
        drawPiece(ctx, piece);
      }
    }

    if (draggedPiece) {
      drawPiece(ctx, draggedPiece);
    }

    updateAndDrawParticles();

    if (hasActiveCanvasAnimation()) {
      renderFrameId = requestAnimationFrame(drawGame);
    }
  }

  function onPointerDown(e) {
    if (isPaused || isWon || !isImageLoaded) {
      return;
    }

    e.preventDefault();
    gameAudio.init();

    activePointerId = e.pointerId;
    canvas.setPointerCapture(activePointerId);

    const { x, y } = getPointerPosition(e);

    startPointerX = x;
    startPointerY = y;
    startPointerTime = Date.now();

    const piece = getPieceAtPointer(x, y);
    if (!piece) {
      return;
    }

    draggedPiece = piece;
    dragOffsetX = x - piece.x;
    dragOffsetY = y - piece.y;

    const index = pieces.indexOf(piece);
    if (index >= 0) {
      pieces.splice(index, 1);
      pieces.push(piece);
    }

    scheduleCanvasRender();
  }

  function onPointerMove(e) {
    if (!draggedPiece || isPaused || e.pointerId !== activePointerId) {
      return;
    }

    e.preventDefault();
    const { x, y } = getPointerPosition(e);
    const { w, h } = getCanvasSize();

    draggedPiece.x = clamp(x - dragOffsetX, 20, w - 20);
    draggedPiece.y = clamp(y - dragOffsetY, 20, h - 20);

    draggedPiece.rx = draggedPiece.x / w;
    draggedPiece.ry = draggedPiece.y / h;

    beginTimerIfNeeded();
    scheduleCanvasRender();
  }

  function onPointerUp(e) {
    if (!draggedPiece || e.pointerId !== activePointerId) {
      return;
    }

    e.preventDefault();

    const { x, y } = getPointerPosition(e);
    const clickDuration = Date.now() - startPointerTime;
    const dragDistance = Math.hypot(x - startPointerX, y - startPointerY);

    if (clickDuration < 260 && dragDistance < 12) {
      if (controls.rotationToggle.checked) {
        if (startPieceRotation(draggedPiece)) {
          incrementMoves();
        }
      }
    } else {
      checkPiecePlacement(draggedPiece);
    }

    draggedPiece = null;
    activePointerId = null;
    scheduleSave();
    scheduleCanvasRender();
  }

  function loadImage(src, meta = {}, onReady) {
    ui.loadingOverlay.classList.remove('hidden');
    isImageLoaded = false;
    hasActiveSolveAnimation = false;
    hasActiveRotateAnimation = false;
    stopCanvasRender();
    isCanvasDirty = true;
    markBoardLayerDirty();
    markLockedLayerDirty();

    const nextImage = new Image();
    nextImage.crossOrigin = 'anonymous';

    nextImage.onload = () => {
      image = nextImage;
      isImageLoaded = true;
      fallbackAttempted = false;
      currentImageMeta = {
        src,
        name: meta.name || 'Пользовательское изображение',
        type: meta.type || 'custom',
        daily: Boolean(meta.daily)
      };
      setSelectedImageDraft({
        ...currentImageMeta,
        previewSrc: meta.previewSrc || src
      });

      if (currentImageMeta.type === 'upload' && typeof src === 'string' && src.startsWith('data:')) {
        try {
          localStorage.setItem(STORAGE_KEYS.uploadImage, src);
        } catch (err) {
          console.warn('Upload image cache error:', err);
        }
      }
      isDailyChallengeActive = currentImageMeta.daily;
      markBoardLayerDirty();
      markLockedLayerDirty();

      ui.loadingOverlay.classList.add('hidden');

      calculateGridDimensions();
      resizeCanvas();

      if (typeof onReady === 'function') {
        onReady();
      } else {
        resetGame();
      }

      setStatus(t('loadedImage', { name: currentImageMeta.name }));
      scheduleSave();
      scheduleCanvasRender();
    };

    nextImage.onerror = () => {
      ui.loadingOverlay.classList.add('hidden');
      if (!fallbackAttempted) {
        fallbackAttempted = true;
        generateFallbackImage();
        showToast(settings.language === 'en' ? 'Loading error. Built-in image is used.' : 'Ошибка загрузки. Используется встроенная картинка.');
      } else {
        showToast(settings.language === 'en' ? 'Image loading failed repeatedly.' : 'Повторная ошибка загрузки изображения.');
      }
    };

    nextImage.src = src;
  }

  function generateFallbackImage() {
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = 1024;
    tempCanvas.height = 768;

    const tctx = tempCanvas.getContext('2d');
    const gradient = tctx.createLinearGradient(0, 0, tempCanvas.width, tempCanvas.height);
    gradient.addColorStop(0, '#1a6f59');
    gradient.addColorStop(0.5, '#1f7694');
    gradient.addColorStop(1, '#2c3c6f');

    tctx.fillStyle = gradient;
    tctx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

    tctx.fillStyle = 'rgba(255, 255, 255, 0.17)';
    for (let i = 0; i < 18; i += 1) {
      tctx.beginPath();
      tctx.arc(Math.random() * tempCanvas.width, Math.random() * tempCanvas.height, 50 + Math.random() * 160, 0, Math.PI * 2);
      tctx.fill();
    }

    tctx.fillStyle = '#f4fffb';
    tctx.font = '700 62px "Space Grotesk", sans-serif';
    tctx.textAlign = 'center';
    tctx.textBaseline = 'middle';
    tctx.fillText('JIGSAW STUDIO', tempCanvas.width / 2, tempCanvas.height / 2);

    loadImage(tempCanvas.toDataURL('image/png'), { name: 'Встроенный фон', type: 'generated' });
  }

  function updateGridSelectorUI() {
    document.querySelectorAll('.grid-btn').forEach((button) => {
      const value = Number(button.dataset.target);
      button.classList.toggle('active', value === gridTargetSize);
    });
  }

  function handleDailyChallenge() {
    const daySeed = Math.floor(Date.now() / 86400000);
    const index = daySeed % presetButtons.length;
    const target = [3, 4, 5, 6][daySeed % 4];

    gridTargetSize = target;
    isDailyChallengeActive = true;
    updateGridSelectorUI();
    persistSettings();

    const btn = presetButtons[index];
    setPresetAsActive(btn);
    setSelectedImageDraft({
      src: btn.dataset.url,
      name: settings.language === 'en' ? `${btn.dataset.name} • Daily` : `${btn.dataset.name} • Челлендж дня`,
      type: 'preset',
      daily: true,
      previewSrc: btn.querySelector('img') ? btn.querySelector('img').src : btn.dataset.url
    });

    loadImage(
      btn.dataset.url,
      {
        name: settings.language === 'en' ? `${btn.dataset.name} • Daily` : `${btn.dataset.name} • Челлендж дня`,
        type: 'preset',
        daily: true
      },
      () => {
        resetGame();
      }
    );

    showToast(t('challenge', { value: `${target}x${target}` }));
  }

  function setPresetAsActive(activeButton) {
    syncPresetSelection(activeButton ? activeButton.dataset.url : '');
  }

  function exportScreenshot() {
    if (!isImageLoaded) {
      showToast(t('uploadFirst'));
      return;
    }

    const dataUrl = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = `jigsaw-${Date.now()}.png`;
    a.click();

    showToast(t('screenshotSaved'));
  }

  function updateMuteButton() {
    controls.muteBtn.setAttribute('aria-pressed', gameAudio.muted ? 'true' : 'false');
    controls.muteBtn.textContent = gameAudio.muted ? t('soundOff') : t('soundOn');
  }

  function bindEvents() {
    controls.imageLoader.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) {
        return;
      }

      const maxSize = 10 * 1024 * 1024;
      if (file.size > maxSize) {
          showToast(t('fileTooBig'), 2300);
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const nextDraft = {
          src: event.target.result,
          name: file.name,
          type: 'upload',
          previewSrc: event.target.result
        };

        if (isMobileLayout && mobileScreen !== 'play') {
          setSelectedImageDraft(nextDraft);
        } else {
          loadImage(nextDraft.src, nextDraft);
        }
      };
      reader.readAsDataURL(file);
      e.target.value = '';
    });

    presetButtons.forEach((button) => {
      button.addEventListener('click', () => {
        setPresetAsActive(button);
        const meta = {
          src: button.dataset.url,
          name: button.dataset.name,
          type: 'preset',
          previewSrc: button.querySelector('img') ? button.querySelector('img').src : button.dataset.url
        };
        setSelectedImageDraft(meta);
        loadImage(meta.src, meta);
      });
    });

    mobilePresetButtons.forEach((button) => {
      button.addEventListener('click', () => {
        setSelectedImageDraft({
          src: button.dataset.url,
          name: button.dataset.name,
          type: 'preset',
          previewSrc: button.dataset.preview || button.dataset.url
        });
      });
    });

    controls.mobileUploadBtn.addEventListener('click', () => {
      controls.imageLoader.click();
    });

    controls.mobileContinueSavedBtn.addEventListener('click', () => {
      tryRestoreSavedState();
    });

    controls.mobileImageNextBtn.addEventListener('click', () => {
      if (!selectedImageDraft) {
        return;
      }
      setMobileScreen('setup');
    });

    controls.mobileSetupBackBtn.addEventListener('click', () => {
      setMobileScreen('image');
    });

    controls.mobileGridSelector.addEventListener('click', (e) => {
      const btn = e.target.closest('.mobile-grid-btn');
      if (!btn) {
        return;
      }

      gridTargetSize = clamp(Number(btn.dataset.target) || 4, 2, 8);
      updateGridSelectorUI();
      persistSettings();
      scheduleCanvasRender();
    });

    controls.mobileRotationToggle.addEventListener('change', () => {
      controls.rotationToggle.checked = controls.mobileRotationToggle.checked;
      persistSettings();
      syncMobileSettingsControls();
    });

    controls.mobileGridLinesToggle.addEventListener('change', () => {
      controls.gridLinesToggle.checked = controls.mobileGridLinesToggle.checked;
      persistSettings();
      markBoardLayerDirty();
      scheduleCanvasRender();
      syncMobileSettingsControls();
    });

    controls.mobileHintOpacity.addEventListener('input', () => {
      controls.hintOpacity.value = controls.mobileHintOpacity.value;
      settings.hintOpacity = Number(controls.mobileHintOpacity.value) / 100;
      persistSettings();
      markBoardLayerDirty();
      scheduleCanvasRender();
      syncMobileSettingsControls();
    });

    controls.mobileStartGameBtn.addEventListener('click', () => {
      startConfiguredGame();
    });

    controls.mobileBackBtn.addEventListener('click', () => {
      if (isGameActive && !isWon && moveCount > 0 && !window.confirm(t('mobileExitPrompt'))) {
        return;
      }

      pauseForMobileNavigation();
      setMobileScreen('setup');
    });

    controls.mobilePlayPauseBtn.addEventListener('click', () => {
      togglePause();
    });

    controls.mobilePlaySettingsBtn.addEventListener('click', () => {
      openSettingsModal({ pauseGame: true });
    });

    controls.mobileRepeatBtn.addEventListener('click', () => {
      if (!selectedImageDraft && currentImageMeta.src) {
        setSelectedImageDraft({
          ...currentImageMeta,
          previewSrc: currentImageMeta.src
        });
      }
      startConfiguredGame();
    });

    controls.mobileHomeBtn.addEventListener('click', () => {
      clearVictoryModal();
      mobileResultState = null;
      setMobileScreen('image');
    });

    controls.gridSelector.addEventListener('click', (e) => {
      const btn = e.target.closest('.grid-btn');
      if (!btn) {
        return;
      }

      gridTargetSize = clamp(Number(btn.dataset.target) || 4, 2, 8);
      updateGridSelectorUI();
      persistSettings();

      if (isImageLoaded) {
        calculateGridDimensions();
        resetGame();
      }
    });

    controls.rotationToggle.addEventListener('change', () => {
      persistSettings();
      if (isImageLoaded) {
        resetGame();
      }
    });

    controls.gridLinesToggle.addEventListener('change', () => {
      persistSettings();
      markBoardLayerDirty();
      scheduleSave();
      scheduleCanvasRender();
    });

    controls.hintOpacity.addEventListener('input', () => {
      controls.opacityValue.textContent = `${controls.hintOpacity.value}%`;
      persistSettings();
      markBoardLayerDirty();
      scheduleSave();
      scheduleCanvasRender();
    });

    controls.muteBtn.addEventListener('click', () => {
      gameAudio.muted = !gameAudio.muted;
      updateMuteButton();
      persistSettings();
    });

    controls.settingsBtn.addEventListener('click', () => {
      openSettingsModal();
    });

    controls.saveSettingsBtn.addEventListener('click', () => {
      settings.language = controls.langSelect.value;
      settings.vibrationEnabled = controls.vibrationToggle.checked;
      settings.compactUi = controls.compactUiToggle.checked;
      document.body.classList.toggle('compact-ui', settings.compactUi);
      persistSettings();
      applyTranslations();
      syncMobileSettingsControls();
      scheduleCanvasRender();
      ui.settingsModal.classList.add('hidden');
      showToast(t('settingsSaved'));
    });

    controls.closeSettingsBtn.addEventListener('click', () => {
      ui.settingsModal.classList.add('hidden');
    });

    ui.settingsModal.addEventListener('click', (e) => {
      if (e.target === ui.settingsModal) {
        ui.settingsModal.classList.add('hidden');
      }
    });

    controls.shuffleBtn.addEventListener('click', scatterAllPieces);
    controls.solveBtn.addEventListener('click', solvePuzzle);
    controls.resetBtn.addEventListener('click', resetGame);
    controls.pauseBtn.addEventListener('click', togglePause);
    controls.dailyBtn.addEventListener('click', handleDailyChallenge);
    controls.continueBtn.addEventListener('click', tryRestoreSavedState);
    controls.screenshotBtn.addEventListener('click', exportScreenshot);

    controls.playAgainBtn.addEventListener('click', () => {
      clearVictoryModal();
      resetGame();
    });

    controls.closeModalBtn.addEventListener('click', clearVictoryModal);

    canvas.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    canvas.addEventListener('touchstart', (e) => e.preventDefault(), { passive: false });
    canvas.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });

    window.addEventListener('resize', () => {
      resizeCanvas();
      applyResponsiveLayout();
      scheduleSave();
      scheduleCanvasRender();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        ui.settingsModal.classList.add('hidden');
      }
      if (e.key === ' ' && document.activeElement === document.body) {
        e.preventDefault();
        togglePause();
      }
      if (e.key.toLowerCase() === 'r' && draggedPiece && controls.rotationToggle.checked) {
        startPieceRotation(draggedPiece);
      }
    });

    document.addEventListener('visibilitychange', () => {
      isDocumentVisible = document.visibilityState !== 'hidden';
      if (!isDocumentVisible) {
        stopCanvasRender();
        return;
      }

      if (isCanvasDirty || hasActiveCanvasAnimation()) {
        scheduleCanvasRender();
      }
    });

    window.addEventListener('online', () => showToast(t('online')));
    window.addEventListener('offline', () => showToast(t('offline')));

    window.addEventListener('beforeunload', () => {
      persistSettings();
      persistGameState();
    });
  }

  function registerPWA() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch((err) => {
          console.warn('SW registration failed:', err);
        });
      });
    }

    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
      deferredInstallPrompt = event;
      ui.installBtn.classList.remove('hidden');
    });

    ui.installBtn.addEventListener('click', async () => {
      if (!deferredInstallPrompt) {
        showToast(t('installUnavailable'));
        return;
      }

      deferredInstallPrompt.prompt();
      const choice = await deferredInstallPrompt.userChoice;
      if (choice.outcome === 'accepted') {
        showToast(t('installed'));
      }
      deferredInstallPrompt = null;
      ui.installBtn.classList.add('hidden');
    });

    window.addEventListener('appinstalled', () => {
      deferredInstallPrompt = null;
      ui.installBtn.classList.add('hidden');
      showToast(t('installedToDevice'));
    });
  }

  function initDefaultImage() {
    if (presetButtons.length > 0) {
      const firstPreset = presetButtons[0];
      setPresetAsActive(firstPreset);
      const initialMeta = {
        src: firstPreset.dataset.url,
        name: firstPreset.dataset.name,
        type: 'preset',
        previewSrc: firstPreset.querySelector('img') ? firstPreset.querySelector('img').src : firstPreset.dataset.url
      };

      if (isMobileLayout) {
        setSelectedImageDraft(initialMeta);
      } else {
        loadImage(initialMeta.src, initialMeta);
      }
    } else {
      generateFallbackImage();
    }
  }

  function init() {
    applyResponsiveLayout();
    loadSettings();
    gameAudio.muted = Boolean(settings.muted);
    updateMuteButton();
    loadProfile();
    loadRecords();
    applyTranslations();
    updateContinueButtonVisibility();
    bindEvents();
    registerPWA();
    resizeCanvas();

    const hasSavedState = Boolean(localStorage.getItem(STORAGE_KEYS.gameState));
    const restoreStarted = hasSavedState && !isMobileLayout ? tryRestoreSavedState() : false;

    if (!restoreStarted) {
      initDefaultImage();
    }

    if (isMobileLayout) {
      setMobileScreen(hasSavedState ? 'image' : (selectedImageDraft ? 'image' : 'image'));
    }

    scheduleCanvasRender();
  }

  init();
})();
