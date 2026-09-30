import React from 'react'
import PropTypes from 'prop-types'
import { IconButton } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { useDataProvider } from 'react-admin'
import { playTracks } from '../actions'
import { ApplePlayIcon, ApplePauseIcon } from './AppleIcons'

export const PlayButton = ({ record, size = 'small', className }) => {
  const dataProvider = useDataProvider()
  const dispatch = useDispatch()
  const playerState = useSelector((state) => state.player)

  const currentSong = playerState?.current?.song
  const isThisAlbum =
    Boolean(record?.id) &&
    Boolean(currentSong) &&
    (currentSong.albumId === record.id || currentSong.album_id === record.id)

  const isPaused = playerState?.current?.paused === true
  const isPlaying = isThisAlbum && !isPaused

  const extractSongsData = (response) => {
    const data = response.data.reduce(
      (acc, cur) => ({ ...acc, [cur.id]: cur }),
      {},
    )
    const ids = response.data.map((r) => r.id)
    return { data, ids }
  }

  const playAlbum = () => {
    dataProvider
      .getList('song', {
        pagination: { page: 1, perPage: -1 },
        sort: { field: 'album', order: 'ASC' },
        filter: {
          album_id: record.id,
          disc_number: record.discNumber,
        },
      })
      .then((response) => {
        const { data, ids } = extractSongsData(response)
        dispatch(playTracks(data, ids))
      })
  }

  const handleClick = (e) => {
    e.stopPropagation()
    e.preventDefault()

    if (isThisAlbum) {
      if (typeof window !== 'undefined' && window.navidromeAudioInstance) {
        if (window.navidromeAudioInstance.paused) {
          window.navidromeAudioInstance.play()
        } else {
          window.navidromeAudioInstance.pause()
        }
      } else {
        const playBtn = document.querySelector('.react-jinke-music-player-main .play-btn')
        if (playBtn) {
          playBtn.click()
        } else {
          playAlbum()
        }
      }
    } else {
      playAlbum()
    }
  }

  const iconSize = size === 'small' ? 20 : 26

  return (
    <IconButton
      onClick={handleClick}
      onMouseDown={(e) => {
        e.stopPropagation()
        e.preventDefault()
      }}
      aria-label={isPlaying ? 'pause' : 'play'}
      className={className}
      size={size}
    >
      {isPlaying ? (
        <ApplePauseIcon size={iconSize} />
      ) : (
        <ApplePlayIcon size={iconSize} />
      )}
    </IconButton>
  )
}

PlayButton.propTypes = {
  record: PropTypes.object.isRequired,
  size: PropTypes.string,
  className: PropTypes.string,
}

export default PlayButton
