# Van D.C. Website

Sitio web oficial de Van D.C., artista visual contemporánea argentina.

## Correr local

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

## Build

```bash
npm run build
```

## Subir a GitHub

1. Confirmar que no haya archivos generados en el commit: `.next`, `out`, `node_modules`, logs o `.env`.
2. Revisar cambios:

```bash
git status
```

3. Crear commit:

```bash
git add .
git commit -m "Preparar sitio Van DC para deploy"
```

4. Subir al repositorio remoto:

```bash
git push origin main
```

## Desplegar en Vercel

- Framework: Next.js
- Root directory: raíz del proyecto
- Build command: `npm run build`
- Install command: `npm install`
- Output directory: automático de Next.js
- Variables de entorno: no requiere por ahora

## Conectar dominio

En Vercel, agregar estos dominios al proyecto:

- `vandc.com.ar`
- `www.vandc.com.ar`

Luego configurar los DNS del dominio según los valores que indique Vercel. Usualmente:

- Dominio raíz `vandc.com.ar`: registro `A` apuntando a la IP indicada por Vercel.
- Subdominio `www`: registro `CNAME` apuntando al host indicado por Vercel.

Cuando ambos figuren como válidos en Vercel, definir `vandc.com.ar` como dominio principal.

## Pendientes visuales menores

- Revisión tipográfica final completa.
- Ajustes finos responsive por página.
- Completar contenido final de Experiencias y Notas.
