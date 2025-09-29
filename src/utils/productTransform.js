
export const formatLabel = (str) =>
  str
    ? str.replace(/_/g, " ").charAt(0).toUpperCase() + str.replace(/_/g, " ").slice(1)
    : "";

export const convertAdditionalInfo = (obj) =>
  obj ? Object.entries(obj).map(([key, value]) => ({ label: formatLabel(key), value })) : [];

export const convertSpecs = (specsObj) =>
  specsObj
    ? Object.entries(specsObj).map(([header, fields]) => ({
        header: formatLabel(header), 
        items: convertAdditionalInfo(fields),
      }))
    : [];
