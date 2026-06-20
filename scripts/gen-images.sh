#!/usr/bin/env bash
# Generate all images for dampproofinginsurance.com via HuggingFace FLUX.1-schnell
# Robust: retries up to 4 times, verifies each is a valid image >= 30KB
set -uo pipefail

OUT="/workspace/Websites/dampproofinginsurance.com/public/images"
mkdir -p "$OUT"

# gen <fname> <prompt> [steps] [width] [height]
gen() {
  local fname="$1"; shift
  local prompt="$1"; shift
  local steps="${1:-4}"; shift || true
  local w="${1:-1024}"; shift || true
  local h="${1:-1024}"; shift || true
  local dest="$OUT/$fname"
  local attempt=0
  while [ $attempt -lt 4 ]; do
    attempt=$((attempt+1))
    echo "[$fname] attempt $attempt (steps=$steps ${w}x${h})..."
    curl -s --max-time 200 \
      https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell \
      -H "Authorization: Bearer $HF_TOKEN" \
      -H "Content-Type: application/json" \
      -d "$(jq -nc --arg p "$prompt" --argjson s "$steps" --argjson w "$w" --argjson h "$h" '{inputs:$p, parameters:{num_inference_steps:$s, width:$w, height:$h}}')" \
      -o "$dest"
    local ftype; ftype=$(file -b "$dest" 2>/dev/null)
    local sz; sz=$(stat -c%s "$dest" 2>/dev/null || echo 0)
    if echo "$ftype" | grep -qiE "image|jpeg|png" && [ "$sz" -ge 30000 ]; then
      echo "[$fname] OK ($sz bytes, $ftype)"
      return 0
    fi
    echo "[$fname] FAIL (size=$sz, type=$ftype)"
    if echo "$ftype" | grep -qi "text\|json"; then head -c 200 "$dest"; echo ""; fi
    sleep 4
  done
  echo "[$fname] GAVE UP after $attempt attempts"
  return 1
}

# === 12 images — DAMPPROOFING INSURANCE ===

gen "hero.jpg" \
  "Photorealistic wide shot of a professional dampproofing contractor in safety gear applying waterproofing membrane to a residential foundation wall during excavation, dark soil background, professional industrial photography, no text" 4

gen "coverage.jpg" \
  "Photorealistic aerial view of a foundation waterproofing project site with excavated perimeter and drainage installation in progress, professional contractor equipment, no text" 4

gen "about.jpg" \
  "Photorealistic portrait of a confident waterproofing contractor in work clothes and hard hat standing at a job site near an excavated foundation, natural light, commercial photography, no text" 4

gen "og-image.jpg" \
  "Photorealistic wide cinematic photo of dampproofing contractor crew waterproofing a large building foundation, spray applied membrane visible, professional industrial setting, no text" 4 1216 640

gen "general-liability.jpg" \
  "Photorealistic photo of dampproofing contractor applying waterproofing membrane to concrete foundation walls inside excavated trench, professional construction photography, no text" 4

gen "contractor-pollution-liability.jpg" \
  "Photorealistic photo of waterproofing contractor in full PPE applying solvent-based membrane in confined space, safety equipment visible, professional photography, no text" 4

gen "workers-compensation.jpg" \
  "Photorealistic photo of dampproofing crew working safely in a crawl space waterproofing installation, safety lighting and PPE visible, professional photography, no text" 4

gen "commercial-auto.jpg" \
  "Photorealistic photo of a professional waterproofing contractor truck with tools and equipment in bed parked at a residential job site, clean commercial vehicle photography, no text" 4

gen "tools-equipment.jpg" \
  "Photorealistic photo of professional waterproofing equipment — injection pumps, spray systems, drainage boards stacked neatly, industrial photography, no text" 4

gen "umbrella.jpg" \
  "Photorealistic photo of waterproofing business owner reviewing insurance policy documents at clean office desk, professional business photography, no text" 4

gen "inland-marine.jpg" \
  "Photorealistic photo of waterproofing contractor loading specialized equipment and materials onto a trailer at a supply yard, professional outdoor photography, no text" 4

gen "bonds.jpg" \
  "Photorealistic photo of dampproofing contractor signing a contract with a homeowner outside a newly waterproofed home foundation, professional interaction, no text" 4

echo "=== ALL IMAGE GENERATION ATTEMPTS COMPLETE ==="
ls -la "$OUT"
