type BlogTableProps = {
  caption?: string
  headers: string[]
  rows: { cells: string[] }[]
}

/** Branded comparison table for blog posts (matches R3BOOT service-page tables). */
export function BlogTable({ caption, headers, rows }: BlogTableProps) {
  if (!headers?.length || !rows?.length) return null

  return (
    <figure className="my-12">
      {caption && (
        <figcaption className="text-lg font-black text-gray-900 dark:text-white mb-4 tracking-tight">
          {caption}
        </figcaption>
      )}
      <div className="overflow-x-auto rounded-3xl border border-gray-200 dark:border-white/10 shadow-xl">
        <table className="w-full min-w-[520px] text-left border-collapse text-sm sm:text-base">
          <thead>
            <tr className="bg-[#513394] text-white">
              {headers.map((header, i) => (
                <th
                  key={i}
                  scope="col"
                  className="px-4 sm:px-6 py-4 font-black uppercase tracking-wider text-[10px] sm:text-xs"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={
                  rowIndex % 2 === 0
                    ? 'bg-white dark:bg-[#0A0A0A]'
                    : 'bg-gray-50 dark:bg-white/[0.03]'
                }
              >
                {row.cells.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="px-4 sm:px-6 py-4 text-gray-700 dark:text-gray-300 font-medium align-top border-t border-gray-100 dark:border-white/5"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  )
}
