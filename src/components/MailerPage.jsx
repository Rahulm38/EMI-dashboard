import { Activity, ArrowUpRight, CalendarDays, Clock3, Mail, Users, Wallet } from 'lucide-react';
import './MailerPage.css';

const formatDate = (value) => {
  if (!value) return '—';
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(value + 'T00:00:00Z'));
};

const formatMoney = (value = 0) => {
  if (value >= 10000000) return '₹' + (value / 10000000).toFixed(2) + 'Cr';
  if (value >= 100000) return '₹' + (value / 100000).toFixed(1) + 'L';
  if (value >= 1000) return '₹' + (value / 1000).toFixed(1) + 'K';
  return '₹' + Math.round(value).toLocaleString('en-IN');
};

const MailerPage = ({ report, fileName }) => {
  const hasReport = Boolean(report && report.bookings);
  const sourceLabel = fileName && fileName.startsWith('Demo portfolio')
    ? 'Synthetic sample data'
    : 'Local CSV · browser session only';

  const stats = hasReport ? [
    { label: 'Bookings', value: report.bookings.toLocaleString('en-IN'), note: 'completed conversions', icon: Activity },
    { label: 'Unique users', value: report.uniqueUsers.toLocaleString('en-IN'), note: 'across this report day', icon: Users },
    { label: 'Converted value', value: formatMoney(report.converted), note: 'principal booked', icon: Wallet },
    { label: 'Interest + fees', value: formatMoney(report.revenue), note: 'daily portfolio income', icon: ArrowUpRight },
  ] : [];

  return (
    <main className="mailer-page" aria-labelledby="mailer-title">
      <div className="mailer-page-heading">
        <div>
          <p className="mailer-eyebrow"><span className="mailer-eyebrow-dot" /> DAILY PORTFOLIO DIGEST</p>
          <h2 id="mailer-title">EMI Mailer</h2>
          <p className="mailer-intro">
            A calm, email-style readout of the latest reporting day in your selected data.
          </p>
        </div>
        <div className="mailer-delay-pill">
          <span className="mailer-delay-count">+1</span>
          <span>
            <strong>NEXT-DAY DELIVERY</strong>
            <small>Arrives one day after the report</small>
          </span>
        </div>
      </div>

      {!hasReport ? (
        <section className="mailer-empty-state">
          <Mail size={24} />
          <h3>No daily activity in this selection</h3>
          <p>Choose a date range with completed EMI records to preview its next-day mailer.</p>
        </section>
      ) : (
        <section className="mailer-frame" aria-label="Email preview">
          <div className="mailer-frame-bar">
            <div className="mailer-window-dots" aria-hidden="true"><span /><span /><span /></div>
            <span className="mailer-frame-label">EMAIL PREVIEW</span>
            <span className="mailer-scheduled">
              <CalendarDays size={14} />
              Scheduled for {formatDate(report.deliveryDate)}
            </span>
          </div>

          <article className="mailer-email">
            <div className="mailer-email-meta">
              <div className="mailer-brand-mark"><Mail size={18} /></div>
              <div className="mailer-brand-copy">
                <strong>EMI Insights</strong>
                <span>DAILY PORTFOLIO DIGEST</span>
              </div>
              <span className="mailer-sample-tag">{sourceLabel}</span>
            </div>

            <div className="mailer-email-rule" />
            <p className="mailer-message-label">REPORT-DAY SNAPSHOT</p>
            <h3>Your daily EMI portfolio update</h3>
            <p className="mailer-message-copy">
              Here is the conversion snapshot for <strong>{formatDate(report.reportDate)}</strong>.
              This digest is shown as a next-day delivery preview for <strong>{formatDate(report.deliveryDate)}</strong>.
            </p>

            <div className="mailer-stat-grid">
              {stats.map(({ label, value, note, icon: Icon }, index) => (
                <div className="mailer-stat" key={label} style={{ '--mailer-stagger': index }}>
                  <span className="mailer-stat-icon"><Icon size={16} /></span>
                  <span className="mailer-stat-label">{label}</span>
                  <strong>{value}</strong>
                  <small>{note}</small>
                </div>
              ))}
            </div>

            <div className="mailer-insight-row">
              <div className="mailer-insight-icon"><Activity size={17} /></div>
              <div>
                <strong>{report.leadingPlatform} led daily bookings</strong>
                <p>{Math.round(report.leadingPlatformShare * 100)}% of the day’s bookings came from this platform.</p>
              </div>
              <div className="mailer-average">
                <span>Average monthly EMI</span>
                <strong>{formatMoney(report.averageEmi)}</strong>
              </div>
            </div>

            <div className="mailer-email-footer">
              <div className="mailer-footer-date">
                <Clock3 size={14} />
                <span>Report day {formatDate(report.reportDate)} · delivered the following day</span>
              </div>
              <p>Sample analytics preview. No email is sent from this page.</p>
            </div>
          </article>
        </section>
      )}

      <div className="mailer-page-footnote">
        <span className="mailer-footnote-icon"><Mail size={14} /></span>
        <p>
          This is a preview only. It uses synthetic dashboard data or the CSV loaded in this browser;
          locally uploaded files are not sent or saved.
        </p>
      </div>
    </main>
  );
};

export default MailerPage;
