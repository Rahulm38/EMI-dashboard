import { ArrowLeft, Mail, Moon, Sun, UploadCloud } from 'lucide-react';

const formatDataRange = (data, fileName) => {
  if (!data?.minDateTime || !data?.maxDateTime) return fileName;

  const format = value => new Date(value).toLocaleString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return `Data from ${format(data.minDateTime)} to ${format(data.maxDateTime)}`;
};

const formatDay = (value) => {
  if (!value) return '';
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(value + 'T00:00:00Z'));
};

const DashboardHeader = ({
  data,
  fileName,
  theme,
  showThemeHint,
  isUploadHovered,
  onFileUpload,
  onUploadHoverChange,
  onThemeToggle,
  view,
  onViewChange,
  mailerReport,
}) => (
  <header className="header animate-fade-in delay-1">
    <div>
      <h1 className="header-title">{view === 'mailer' ? 'EMI Mailer' : 'EMI Dashboard'}</h1>
      <p className="header-subtitle">
        <span className="header-data-range">
          {view === 'mailer'
            ? mailerReport
              ? 'Daily preview · ' + formatDay(mailerReport.reportDate) + ' data · delivery ' + formatDay(mailerReport.deliveryDate)
              : 'Daily email preview · next-day delivery'}
            : formatDataRange(data, fileName)}
        </span>
      </p>
    </div>

    <div className="header-actions">
      {view === 'mailer' ? (
        <button
          type="button"
          onClick={() => onViewChange('dashboard')}
          className="btn-secondary mailer-nav-button"
          title="Return to the dashboard"
        >
          <ArrowLeft size={16} />
          <span>Dashboard</span>
        </button>
      ) : (
        <button
          type="button"
          onClick={() => onViewChange('mailer')}
          className="btn-secondary mailer-nav-button"
          title="Preview the daily EMI email digest"
        >
          <Mail size={16} />
          <span>EMI Mailer</span>
          <span className="mailer-nav-badge">PREVIEW</span>
        </button>
      )}
      <div
        className="upload-control"
        onMouseEnter={() => onUploadHoverChange(true)}
        onMouseLeave={() => onUploadHoverChange(false)}
      >
        <label className="btn-secondary">
          <UploadCloud size={16} color="var(--primary-light)" />
          <span>Upload CSV locally</span>
          <input
            type="file"
            accept=".csv,text/csv"
            onChange={onFileUpload}
            className="visually-hidden-input"
          />
        </label>
        {isUploadHovered && (
          <div className="upload-help">
            <strong className="upload-help-title">Private session</strong>
            Uploaded CSVs are processed in this browser session only and are not saved or synced.
          </div>
        )}
      </div>

      <button
        onClick={onThemeToggle}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        className={`theme-toggle ${showThemeHint ? 'theme-toggle--hinting' : ''}`}
        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
      </button>
    </div>
  </header>
);

export default DashboardHeader;
