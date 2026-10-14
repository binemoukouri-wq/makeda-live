export const columns = [
  ['id', 'id'], ['name', 'name'], ['whatsapp', 'phone'], ['email', 'email'],
  ['wants_more_information', 'moreInfo'], ['marketing_opt_in', 'marketing'],
  ['data_processing_consent', 'consent'], ['amount_xaf', 'amount'],
  ['frequency', 'frequency'], ['projection_xaf', 'projection'], ['product', 'product'],
  ['source', 'source'], ['status', 'status'], ['created_at', 'created'],
  ['appointment_status', 'appointmentStatus'], ['appointment_at', 'appointment'],
] as const;

export function leadCsv(rows: Record<string, unknown>[]) {
  const cell = (value: unknown) => {
    let text = String(value ?? '');
    if (/^[\s]*[=+@\-]/.test(text) || /^[\t\r\n]/.test(text)) text = "'" + text;
    return '"' + text.replaceAll('"', '""') + '"';
  };
  return '\ufeff' + [columns.map(([name]) => cell(name)).join(','),
    ...rows.map(row => columns.map(([, key]) => cell(row[key])).join(','))].join('\r\n');
}
