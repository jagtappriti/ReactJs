import React from 'react'

export default function TextForm(props) {
  return (
    <div>
        <h1>{props.heading}</h1>
<div class="mb-3">
  <label for="MyBox" class="form-label">Example textarea</label>
  <textarea class="form-control" id="MyBox" rows="3"></textarea>
</div>
    </div>
  )
}
